import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen);
  const handleSidebarClose = () => setSidebarOpen(false);

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
    }else {
      setShowFolderDropdown(false);
      setShowSaveDropdown(false);
      setShowSettingsDropdown(false);
    }
  };

  const handleCloseForm = () => setShowBirthForm(false);

  const handleDropdownClick = (action) => {
    setShowFolderDropdown(false);
    if (action === 'openChart') {
      // Add your logic to open chart
      alert('Open Chart clicked');
    } else if (action === 'openNotes') {
      // Add your logic to open notes
      alert('Open Notes clicked');
    }
  };

  return (
    <div>
      <div className="header">
        {/* Logo Section */}
        <div className="image-column">
          <img
            src="/GL_ASTRO_TOOLS/#/GL Astro Tools UI/Logo.png"
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
              <img
                src={`/GL Astro Tools UI/${icon}.png`}
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
      {/* Hamburger icon for mobile */}
      <div className="mobile-nav-icon" onClick={handleSidebarToggle}>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </div>
      {/* Sidebar */}
      <div className={`mobile-sidebar${sidebarOpen ? ' open' : ''}`}>
        <div className="sidebar-content">
          <a
            href="/GL_ASTRO_TOOLS/"
            className={`nav-item${location.pathname === '/GL_ASTRO_TOOLS/' ? ' active' : ''}`}
            onClick={handleSidebarClose}
          >
            Home
          </a>
          <a
            href="/GL_ASTRO_TOOLS/#/affliction-report"
            className={`nav-item${location.pathname === '/GL_ASTRO_TOOLS/#/affliction-report' ? ' active' : ''}`}
            onClick={handleSidebarClose}
          >
            Affliction Report
          </a>
          <a
            href="/GL_ASTRO_TOOLS/#/vastu-jyotish"
            className={`nav-item${location.pathname === '/GL_ASTRO_TOOLS/#/vastu-jyotish' ? ' active' : ''}`}
            onClick={handleSidebarClose}
          >
            Vastu Jyotish
          </a>
          <a
            href="/GL_ASTRO_TOOLS/#/prashna"
            className={`nav-item${location.pathname === '/GL_ASTRO_TOOLS/#/prashna' ? ' active' : ''}`}
            onClick={handleSidebarClose}
          >
            Prashna
          </a>
          <a href="/GL_ASTRO_TOOLS/#/admin" className="nav-item" onClick={handleSidebarClose}>Admin</a>
          <a href="/GL_ASTRO_TOOLS/logout" className="nav-item" onClick={handleSidebarClose}>Logout</a>
        </div>
        <div className="sidebar-backdrop" onClick={handleSidebarClose}></div>
      </div>

      {/* Desktop Navigation Bar */}
      <div className='nav-wrapper'>
        <nav className="navbar">
          <div className="navbar-left">
            <a
              href="/GL_ASTRO_TOOLS/"
              className={`nav-item${location.pathname === '/GL_ASTRO_TOOLS/' ? ' active' : ''}`}
            >
              Home
            </a>
            <a
              href="/GL_ASTRO_TOOLS/#/affliction-report"
              className={`nav-item${location.pathname === '/GL_ASTRO_TOOLS/#affliction-report' ? ' active' : ''}`}
            >
              Affliction Report
            </a>
            <a
              href="/GL_ASTRO_TOOLS/#/vastu-jyotish"
              className={`nav-item${location.pathname === '/GL_ASTRO_TOOLS/#vastu-jyotish' ? ' active' : ''}`}
            >
              Vastu Jyotish
            </a>
            <a
              href="/GL_ASTRO_TOOLS/#/prashna"
              className={`nav-item${location.pathname === '/GL_ASTRO_TOOLS/#prashna' ? ' active' : ''}`}
            >
              Prashna
            </a>
          </div>
          <div className="navbar-right">
            <a href="/GL_ASTRO_TOOLS/admin" className="nav-item">Admin</a>
            <a href="/GL_ASTRO_TOOLS/#/login" className="nav-item">Logout</a>
          </div>
        </nav>
      </div>
      {showBirthForm && <BirthForm onClose={handleCloseForm} />}
    </div>
  );
}

export default Navbar;