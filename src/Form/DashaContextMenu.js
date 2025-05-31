import React, { useState } from "react";

const menuStyle = {
  position: "fixed",
  zIndex: 1000,
  background: "#f8f8f8",
  border: "3px solid #1cb0f6",
  borderRadius: "6px",
  boxShadow: "0 2px 16px #0002",
  padding: "18px 0 18px 0",
  minWidth: 340,
  fontFamily: "Segoe UI, Arial, sans-serif",
  color: "#444"
};

const sectionStyle = {
  padding: "0 28px",
  marginBottom: 8
};

const dividerStyle = {
  border: "none",
  borderTop: "2px solid #ddd",
  margin: "10px 0"
};

const labelStyle = {
  fontSize: '18px',
  fontWeight: 700,
  color: '#444',
  display: 'flex',
  alignItems: 'center',
  margin: '1px 0',
  cursor: 'pointer',
};

const radioInputStyle = {
  accentColor: '#ff4d4d',
  width: 20,
  height: 20,
  marginRight: 10,
};

const dashaRadios1 = [
  { value: "vimsottari", label: "Vimsottari Dasha" },
  { value: "ashtottari", label: "Ashtottari Dasha" },
  { value: "kalachakra", label: "Kalachakra Dasha" },
  { value: "yogini", label: "Yogini Dasha" }
];

const dashaRadios2 = [
  { value: "dwisaptati", label: "Dwisaptati Sama Dasha" },
  { value: "shattrimsa", label: "Shattrimsa Sama Dasha" },
  { value: "dwadasottari", label: "Dwadasottari Dasha" },
  { value: "chaturaseeti", label: "Chaturaseeti Sama Dasha" },
  { value: "sataabdika", label: "Sataabdika Dasha" },
  { value: "shodasottari", label: "Shodasottari Dasha" },
  { value: "panchottari", label: "Panchottari Dasha" },
  { value: "shashthihayani", label: "Shashthihayani Dasha" }
];

const DashaContextMenu = ({ x, y, onClose }) => {
    const [selected, setSelected] = useState("vimsottari");

    // Close menu on click outside
    React.useEffect(() => {
        const handler = (e) => onClose();
        window.addEventListener("click", handler);
        return () => window.removeEventListener("click", handler);
    }, [onClose]);

    return (
    <div
        className="hide-scrollbar"
        style={{
        ...menuStyle,
        left: x,
        top: y,
        maxHeight: 330,
        overflowY: "auto",
        overscrollBehavior: "contain"
        }}
        onClick={e => e.stopPropagation()} 
    >
        <div style={sectionStyle}>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 2 }}>Entry Chart Of This Period</div>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 2 }}>Locate An Event</div>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 2 }}>Shift Dasha Dates</div>
        </div>
        <hr style={dividerStyle} />
        <div style={sectionStyle}>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 2 }}>
            Definition Of Year In Dashas <span style={{ float: "right" }}>{'>'}</span>
        </div>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 2 }}>
            Preferences Related To Dashas <span style={{ float: "right" }}>{'>'}</span>
        </div>
        </div>
        <hr style={dividerStyle} />
        <div style={sectionStyle}>
        {dashaRadios1.map(radio => (
            <label key={radio.value} className="radio-option" style={labelStyle}>
            <input
                type="radio"
                name="dasha"
                value={radio.value}
                checked={selected === radio.value}
                onChange={() => setSelected(radio.value)}
            />
            {radio.label}
            </label>
        ))}
        </div>
        <hr style={dividerStyle} />
        <div style={sectionStyle}>
        {dashaRadios2.map(radio => (
            <label key={radio.value} className="radio-option" style={labelStyle}>
            <input
                type="radio"
                name="dasha"
                value={radio.value}
                checked={selected === radio.value}
                onChange={() => setSelected(radio.value)}
            />
            {radio.label}
            </label>
        ))}
        </div>
    </div>
    );
};

export default DashaContextMenu;