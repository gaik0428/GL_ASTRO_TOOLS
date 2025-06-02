import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import BirthForm from '../Form/BirthForm';
import FolderForm from '../Form/FolderForm';
import SaveForm from '../Form/SaveForm';
import SettingsForm from '../Form/SettingsForm';
import LanguageForm from '../Form/LanguageForm';

function Navbar() {
  const [showBirthForm, setShowBirthForm] = useState(false);
  const [showFolderDropdown, setShowFolderDropdown] = useState(false);
  const [showSaveDropdown, setShowSaveDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [language, setLanguage] = useState('english');
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname + location.hash;

  // Navigation handler
  const handleNavigation = (path, event) => {
    // For hash links, let browser handle navigation
    if (path.startsWith('#/')) {
      // Do nothing, let <a href> handle it
    } else {
      event.preventDefault();
      if (path.startsWith('/GL_ASTRO_TOOLS/')) {
        window.location.href = path;
      } else {
        navigate(path);
      }
    }
  };

  const handleIconClick = (icon) => {
    if (icon === 'birth') {
      setShowBirthForm(true);
      setShowFolderDropdown(false);
      setShowSaveDropdown(false);
      setShowSettingsDropdown(false);
    } else if (icon === 'folder') {
      setShowFolderDropdown((prev) => !prev);
      setShowSaveDropdown(false);
      setShowSettingsDropdown(false);
    } else if (icon === 'save') {
      setShowSaveDropdown((prev) => !prev);
      setShowFolderDropdown(false);
      setShowSettingsDropdown(false);
    } else if (icon === 'settings') {
      setShowSettingsDropdown((prev) => !prev);
      setShowFolderDropdown(false);
      setShowSaveDropdown(false);
    } else if (icon === 'languages') {
      setShowLanguageDropdown((prev) => !prev);
      setShowFolderDropdown(false);
      setShowSaveDropdown(false);
      setShowSettingsDropdown(false);
    } else {
      setShowFolderDropdown(false);
      setShowSaveDropdown(false);
      setShowSettingsDropdown(false);
    }
  };

  const handleCloseForm = () => setShowBirthForm(false);

  const handleDropdownClick = (action) => {
    setShowFolderDropdown(false);
    if (action === 'openChart') {
      alert('Open Chart clicked');
    } else if (action === 'openNotes') {
      alert('Open Notes clicked');
    }
  };

  // Check if current path matches the nav item
  const isActive = (path) => {
    if (path === '/') {
      return currentPath === '/GL_ASTRO_TOOLS/' || currentPath === '/';
    }
    return currentPath.includes(path.replace('#', ''));
  };

  return (
    <div>
      <div className="header">
        {/* Logo Section */}
        <div className="image-column">
          <img src={`${process.env.PUBLIC_URL}/GL Astro Tools UI/Logo.png`} 
            alt="Logo"
            style={{ width: '300px', height: 'auto' }}
          />
        </div>

        {/* Centered Text Section */}
        <div className="birth-chart-container">
          <h1 className="name">Preeti Patel</h1>
          <div className="birth-info">December 25, 1991 1:23:00</div>
          <div className="birth-info">5:30:00 (East of GMT)</div>
          <div className="birth-info">Lucknow, U.P. - India</div>
          <div className="birth-info">80 E 55' 00", 26 N 51' 00"</div>
        </div>

        {/* Icon Section */}
        <div className="image-list" style={{ position: 'relative' }}>
          {[
            'notepad',
            'birth',
            'folder',
            'save',
            'settings',
            'languages',
          ].map((icon) => (
            <div
              className="image-box"
              key={icon}
              onClick={() => handleIconClick(icon)}
              style={{ cursor: 'pointer', position: 'relative' }}
            >
              <img src={`${process.env.PUBLIC_URL}/GL Astro Tools UI/${icon}.png`}
                alt={icon}
                className="image-box-img"
              />
              {icon === 'folder' && showFolderDropdown && (
                <FolderForm
                  onOpenChart={() => handleDropdownClick('openChart')}
                  onOpenNotes={() => handleDropdownClick('openNotes')}
                  onClose={() => setShowFolderDropdown(false)}
                />
              )}
              {icon === 'save' && showSaveDropdown && (
                <SaveForm
                  onSaveChart={() => alert('Save Chart')}
                  onSaveChartAs={() => alert('Save Chart As...')}
                  onSaveNotes={() => alert('Save Notes')}
                  onClose={() => setShowSaveDropdown(false)}
                />
              )}
              {icon === 'settings' && showSettingsDropdown && (
                <SettingsForm
                  onSelect={(key) => alert(key + ' selected')}
                  onClose={() => setShowSettingsDropdown(false)}
                />
              )}
              {icon === 'languages' && showLanguageDropdown && (
                <LanguageForm
                  selected={language}
                  onSelect={(lang) => { setLanguage(lang); setShowLanguageDropdown(false); }}
                  onClose={() => setShowLanguageDropdown(false)}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Navigation Bar */}
      <div className='nav-wrapper'>
        <nav className="navbar">
          <div className="navbar-left">
            <a
              href="/GL_ASTRO_TOOLS/"
              className={`nav-item${isActive('/') ? ' active' : ''}`}
              onClick={(e) => handleNavigation('/GL_ASTRO_TOOLS/', e)}
            >
              Home
            </a>
            <a
              href="#/affliction-report"
              className={`nav-item${isActive('/affliction-report') ? ' active' : ''}`}
            >
              Affliction Report
            </a>
            <a
              href="#/vastu-jyotish"
              className={`nav-item${isActive('/vastu-jyotish') ? ' active' : ''}`}
            >
              Vastu Jyotish
            </a>
            <a
              href="#/prashna"
              className={`nav-item${isActive('/prashna') ? ' active' : ''}`}
            >
              Prashna
            </a>
          </div>
          <div className="navbar-right">
            <a 
              href="#/admin" 
              className={`nav-item${isActive('/admin') ? ' active' : ''}`}
            >
              Admin
            </a>
            <a 
              href="#/login" 
              className={`nav-item${isActive('/login') ? ' active' : ''}`}
            >
              Logout
            </a>
          </div>
        </nav>
      </div>
      {showBirthForm && <BirthForm onClose={handleCloseForm} />}
    </div>
  );
}

export default Navbar;