import React, { useRef, useEffect } from 'react';
import './SettingsForm.css';

const itemStyle = {
  display: 'block',
  width: '100%',
  padding: '8px 8px 8px 8px',
  background: 'none',
  border: 'none',
  textAlign: 'left',
  cursor: 'pointer',
  fontSize: '17px',
  fontWeight: 700,
  color: '#444',
  outline: 'none',
  transition: 'background 0.15s, color 0.15s',
};

const itemHoverStyle = {
  background: '#ccc'
};

function SettingsForm({ onSelect, onClose }) {
  const dropdownRef = useRef(null);
  const [hovered, setHovered] = React.useState('');

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (onClose) onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const items = [
    { key: 'ayanamsa', label: 'Ayanamsa' },
    'divider',
    { key: 'planet', label: 'Planet Calculation' },
    { key: 'upgraha', label: 'Upgraha Calculation' },
    { key: 'divisional', label: 'Divisional Chart Calculation' },
    { key: 'sunrise', label: 'Sunrise & Sunset Definition' },
    { key: 'hora', label: 'Hora and Weekday Start' },
    'divider',
    { key: 'affliction', label: 'Affliction Variation' },
    { key: 'freewill', label: 'Free Will Variation' },
    { key: 'arudha', label: 'Arudha Variation' },
    'divider',
    { key: 'save', label: 'Save Preferences' },
    { key: 'restore', label: 'Restore Default Calculation' },
    { key: 'location', label: 'Use Current Location As Default' },
  ];

  return (
    <div
      ref={dropdownRef}
      className="settings-form-dropdown"
      style={{
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#f7f7f7',
        border: '2px solid #00aaff',
        borderRadius: '18px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
        zIndex: 1000,
        minWidth: '280px',
        padding: '18px 18px 8px 18px',
        textAlign: 'left',
        marginTop: '8px',
      }}
    >
      <div className="settings-form-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
        <img
          src={`${process.env.PUBLIC_URL}/GL Astro Tools UI/settings.png`}
          alt="Settings"
          style={{ width: 48, height: 48, marginRight: 10 }}
        />
        <span style={{ fontSize: 32, fontWeight: 700, color: '#666' }}>Settings</span>
      </div>
      <hr style={{ border: 'none', borderTop: '3px solid #e0e0e0', margin: '6px 0' }} />
      {items.map((item, idx) =>
        item === 'divider' ? (
          <hr
            key={idx}
            style={{ border: 'none', borderTop: '3px solid #e0e0e0', margin: '6px 0' }}
          />
        ) : (
          <button
            key={item.key}
            style={hovered === item.key ? { ...itemStyle, ...itemHoverStyle } : itemStyle}
            onMouseEnter={() => setHovered(item.key)}
            onMouseLeave={() => setHovered('')}
            onClick={() => onSelect && onSelect(item.key)}
          >
            {item.label}
          </button>
        )
      )}
    </div>
  );
}

export default SettingsForm;