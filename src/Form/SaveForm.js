import React, { useRef, useEffect } from 'react';
import './SaveForm.css';

const buttonStyle = {
  display: 'block',
  width: '100%',
  padding: '12px 8px 12px 8px',
  background: 'none',
  border: 'none',
  textAlign: 'left',
  cursor: 'pointer',
  fontSize: '22px',
  fontWeight: 600,
  color: '#444',
  outline: 'none',
  transition: 'background 0.15s, color 0.15s',
};

const buttonHoverStyle = {
  background: '#ccc'
};

function SaveForm({ onSaveChart, onSaveChartAs, onSaveNotes, onClose }) {
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

  return (
    <div
      ref={dropdownRef}
      className="save-form-dropdown"
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
        minWidth: '200px',
        padding: '18px 18px 8px 18px',
        textAlign: 'left',
        marginTop: '8px',
      }}
    >
      <div className="save-form-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
        <img
          src={`${process.env.PUBLIC_URL}/GL Astro Tools UI/save.png`}
          alt="Save"
          style={{ width: 48, height: 48, marginRight: 10 }}
        />
        <span style={{ fontSize: 32, fontWeight: 700, color: '#666' }}>Save</span>
      </div>
      <hr style={{ border: 'none', borderTop: '3px solid #e0e0e0', margin: '8px 0' }} />
      <button
        style={hovered === 'chart' ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
        onMouseEnter={() => setHovered('chart')}
        onMouseLeave={() => setHovered('')}
        onClick={onSaveChart}
      >
        Save Chart
      </button>
      <button
        style={hovered === 'chartas' ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
        onMouseEnter={() => setHovered('chartas')}
        onMouseLeave={() => setHovered('')}
        onClick={onSaveChartAs}
      >
        Save Chart As....
      </button>
      <hr style={{ border: 'none', borderTop: '3px solid #e0e0e0', margin: '0 0 0 0' }} />
      <button
        style={hovered === 'notes' ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
        onMouseEnter={() => setHovered('notes')}
        onMouseLeave={() => setHovered('')}
        onClick={onSaveNotes}
      >
        Save Notes
      </button>
    </div>
  );
}

export default SaveForm;