import React, { useEffect, useRef } from 'react';
import './scrollable.css';

const radioOptions = [
  "Show Planets",
  "Show Degrees",
  "Show Degree & Minute",
  "Show Rashi Name",
  "Show House Name",
  "Show Dagdh Rashi",
  "Show Nakshatra of planets",
  "Show Special Lagna",
  "Show Upgraha",
  "Show Aprakashit Graha",
  "Show Rashi Tulya Amsa",
  "Show Progression"
];

function ChartContextMenu({ x, y, onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className="hide-scrollbar"
      style={{
        position: 'fixed',
        top: y,
        left: x,
        background: '#f7f7f7',
        border: '2px solid #00aaff',
        borderRadius: '6px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
        zIndex: 2000,
        minWidth: '370px',
        maxHeight: '41vh',
        overflowY: 'auto',
        padding: '18px 18px 8px 18px',
        textAlign: 'left',
        fontFamily: 'inherit'
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: '#666' }}>
        Rotate Chart From This House
      </div>
      <hr style={{ border: 'none', borderTop: '2px solid #e0e0e0', margin: '8px 0' }} />
      <div style={{ fontWeight: 700, fontSize: 16, color: '#666', margin: '8px 0' }}>
        When Will Lagna Change Sign In D-1
      </div>
      <div style={{ fontWeight: 700, fontSize: 16, color: '#666', margin: '8px 0' }}>
        Change Birthtime To Move Lagna To
      </div>
      <hr style={{ border: 'none', borderTop: '2px solid #e0e0e0', margin: '8px 0' }} />
      {radioOptions.slice(0, 5).map((label, idx) => (
        <label key={label} className="radio-option" style={{
          fontSize: '16px',
          fontWeight: 700,
          color: '#666',
          display: 'flex',
          alignItems: 'center',
          margin: '1px 0',
          cursor: 'pointer'
        }}>
          <input type="radio" name="chart-menu" style={{ marginRight: 8 }} />
          {label}
        </label>
      ))}
      <hr style={{ border: 'none', borderTop: '2px solid #e0e0e0', margin: '8px 0' }} />
      {radioOptions.slice(5, 11).map((label, idx) => (
        <label key={label} className="radio-option" style={{
          fontSize: '16px',
          fontWeight: 700,
          color: '#666',
          display: 'flex',
          alignItems: 'center',
          margin: '1px 0',
          cursor: 'pointer'
        }}>
          <input type="radio" name="chart-menu" style={{ marginRight: 8 }} />
          {label}
        </label>
      ))}
      <hr style={{ border: 'none', borderTop: '2px solid #e0e0e0', margin: '8px 0' }} />
      <label className="radio-option" style={{
        fontSize: '16px',
        fontWeight: 700,
        color: '#666',
        display: 'flex',
        alignItems: 'center',
        margin: '1px 0',
        cursor: 'pointer'
      }}>
        <input type="radio" name="chart-menu" style={{ marginRight: 8 }} />
        {radioOptions[11]}
      </label>
      <hr style={{ border: 'none', borderTop: '2px solid #e0e0e0', margin: '8px 0' }} />
      <div style={{ fontWeight: 700, fontSize: 16, color: '#666', margin: '1px 0' }}>
        Copy Chart
      </div>
    </div>
  );
}

export default ChartContextMenu;