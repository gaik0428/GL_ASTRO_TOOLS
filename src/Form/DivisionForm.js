import React, { useRef, useEffect } from 'react';
import './BirthForm.css'
import './scrollable.css';

const divisionList = [
  { key: 'd1', label: 'Rashi (D-1)' },
  { key: 'd9', label: 'Navamsa (D-9)' },
  'divider',
  { key: 'd2', label: 'Hora (D-2)' },
  { key: 'd3', label: 'Drekkana (D-3)' },
  { key: 'd4', label: 'Chaturthamsa (D-4)' },
  { key: 'd5', label: 'Panchamsa (D-5)' },
  { key: 'd6', label: 'Shashthamsa (D-6)' },
  { key: 'd7', label: 'Saptamsa (D-7)' },
  { key: 'd8', label: 'Ashtamsa (D-8)' },
  { key: 'd10', label: 'Dasamsa (D-10)' },
  { key: 'd11', label: 'Rudramsa (D-11)' },
  { key: 'd12', label: 'Dwadasamsa (D-12)' },
  { key: 'd16', label: 'Shodasamsa (D-16)' },
  { key: 'd20', label: 'Vimsamsa (D-20)' },
  { key: 'd24', label: 'Siddhamsa (D-24)' },
  { key: 'd27', label: 'Nakshatramsa (D-27)' },
  { key: 'd30', label: 'Trimsamsa (D-30)' },
];

const labelStyle = {
  fontSize: '16px',
  fontWeight: 700,
  color: '#444',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
};

function DivisionForm({ selected, onSelect, onClose, onHigherDivisions }) {
  const dropdownRef = useRef(null);

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
      className= "hide-scrollbar"
      style={{
        position: 'absolute',
        top: '120px',
        left: '70%',
        transform: 'translateX(-50%)',
        background: '#f7f7f7',
        border: '2px solid #00aaff',
        borderRadius: '6px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
        zIndex: 1000,
        minWidth: '220px',
        maxHeight: '49vh',
        overflowY: 'auto',
        padding: '18px 18px 8px 18px',
        textAlign: 'left',
      }}
    >
      {divisionList.map((item, idx) =>
        item === 'divider' ? (
          <hr
            key={idx}
            style={{ border: 'none', borderTop: '2px solid #e0e0e0', margin: '8px 0' }}
          />
        ) : (
          <label key={item.key} className="radio-option" style={labelStyle}>
            <input
              type="radio"
              name="division"
              value={item.key}
              checked={selected === item.key}
              onChange={() => onSelect && onSelect(item.key)}
            />
            {item.label}
          </label>
        )
      )}
      <hr style={{ border: 'none', borderTop: '2px solid #e0e0e0', margin: '8px 0' }} />
      <button
        style={{
          ...labelStyle,
          background: 'none',
          border: 'none',
          width: '100%',
          justifyContent: 'space-between',
          fontSize: '18px',
          color: 'gray',
          margin: '0',
        }}
        onClick={onHigherDivisions}
      >
        Higher divisions <span style={{ fontSize: 26, fontWeight: 700 }}>{'>'}</span>
      </button>
    </div>
  );
}

export default DivisionForm;