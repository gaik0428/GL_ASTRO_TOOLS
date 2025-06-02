import React, { useRef, useEffect } from 'react';
import './BirthForm.css';
const labelStyle = {
  fontSize: '22px',
  fontWeight: 700,
  color: '#444',
  display: 'flex',
  alignItems: 'center',
  margin: '12px 0',
  cursor: 'pointer',
};

function LanguageForm({ selected, onSelect, onClose }) {
  const dropdownRef = useRef(null);

    useEffect(() => {
    function handleClickOutside(event) {
        const dropdown = dropdownRef.current;
        if (
        dropdown &&
        !dropdown.contains(event.target) &&
        !event.target.classList.contains('language-dropdown')
        ) {
        }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

  return (
    <div
      className="language-dropdown"
      ref={dropdownRef}
      style={{
        position: 'absolute',
        top: '100%',
        transform: 'translateX(-38%)',
        background: '#f7f7f7',
        border: '2px solid #00aaff',
        borderRadius: '18px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
        zIndex: 1000,
        minWidth: '300px',
        padding: '18px 18px 8px 18px',
        textAlign: 'left',
        marginTop: '8px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
        <img
          src={`${process.env.PUBLIC_URL}/GL Astro Tools UI/languages.png`}
          alt="Language"
          style={{ width: 48, height: 48, marginRight: 10 }}
        />
        <span style={{ fontSize: 32, fontWeight: 700, color: '#666' }}>Language</span>
      </div>
      <hr style={{ border: 'none', borderTop: '2px solid #e0e0e0', margin: '8px 0' }} />
      <label className="radio-option" style={labelStyle}>
        <input
          type="radio"
          name="language"
          value="english"
          checked={selected === 'english'}
          onChange={() => onSelect && onSelect('english')}
        />
        English
      </label>
      <label className="radio-option" style={labelStyle}>
        <input
          type="radio"
          name="language"
          value="hindi"
          checked={selected === 'hindi'}
          onChange={() => onSelect && onSelect('hindi')}
        />
        Hindi
      </label>
    </div>
  );
}

export default LanguageForm;