import React, { useState } from "react";
import "./LifeAreaSection.css";

const houseHeaders = [
  "House Factors", "Somyas", "1,5,9 Lords", "Kruras", "6,8,12 Lords", "Separative"
];
const houseRows = [
  ["House : 10th House", "0", "0", "0", "0", "0"],
  ["Karaka : Saturn", "Ju", "0", "Ra,Su", "Su", "Ra,Su,12L"],
  ["Ho./Karaka : 6th House", "0", "Sa", "0", "0", "0"]
];

const lordHeaders = [
  "Lord Factors", "Somyas", "1,5,9 Lords", "Kruras", "6,8,12 Lords", "Separative"
];
const lordRows = [
  ["10th Lord : Mercury", "Ve", "Ve", "0", "0", "0"],
  ["Karaka : Saturn", "Ju", "0", "Ra,Su", "Su", "Ra,Su,12L"],
  ["6th Lord : Saturn", "Ju", "0", "Ra,Su", "Su", "Ra,Su,12L"]
];

const cellStyle = {
  border: "2px solid #222",
  fontWeight: 700,
  textAlign: "center",
  padding: "4px 0",
  fontFamily: "Segoe UI, Arial, sans-serif"
};

const headerBlue = {
  ...cellStyle,
  background: "#2f75b5",
  color: "#fff",
  fontWeight: 700
};

const headerYellow = {
  ...cellStyle,
  background: "#ffc000",
  color: "#222",
  fontWeight: 700
};

const leftCol = {
  ...cellStyle,
  background: "#fff",
  color: "#222",
  fontWeight: 700,
  textAlign: "center",
  paddingLeft: 18
};

const greenCell = {
  ...cellStyle,
  background: "#bce636",
  color: "#222"
};

const redCell = {
  ...cellStyle,
  background: "#ff0000",
  color: "#fff"
};

const careerOptions = [
  "Career",
  "Finance",
  "Relationships",
  "Health",
  "Education"
];

const LifeAreaSection = () => {
  const [toggle, setToggle] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState(careerOptions[0]);

  const handleDropdownSelect = (option) => {
    setSelectedArea(option);
    setDropdownOpen(false);
  };

  return (
    <div className="life-area-section">
      <div className="life-area-section-header">
        {/* Dropdown Section */}
        <div className="life-area-dropdown-wrapper">
          <button
            className="life-area-dropdown-btn"
            onClick={() => setDropdownOpen((v) => !v)}
            aria-expanded={dropdownOpen}
          >
            {selectedArea}
            <span className="life-area-dropdown-arrow">&#9660;</span>
          </button>
          {dropdownOpen && (
            <ul className="life-area-dropdown-list">
              {careerOptions.map((option) => (
                <li
                  key={option}
                  className={`life-area-dropdown-item${option === selectedArea ? " selected" : ""}`}
                  onClick={() => handleDropdownSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Toggle */}
        <div className="life-area-toggle-container">
          <button
            onClick={() => setToggle((v) => !v)}
            aria-pressed={toggle}
            className={`life-area-toggle-btn${toggle ? " on" : ""}`}
          >
            <div className={`life-area-toggle-slider${toggle ? " on" : ""}`} />
          </button>
          <span className="life-area-font-size life-area-toggle-label">Prediction through Rashi</span>
        </div>
      </div>
      {/* House Factors Table */}
      <table className="life-area-table">
        <colgroup>
          {houseHeaders.map((_, index) => (
            <col key={index} style={{ width: `${100 / houseHeaders.length}%` }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {houseHeaders.map((h, i) => (
              <th key={i} className='life-area-font-size' style={headerBlue}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {houseRows.map((row, i) => (
            <tr key={i}>
              <td className='life-area-font-size' style={leftCol}>{row[0]}</td>
              {row.slice(1).map((cell, j) => (
                <td
                  key={j}
                  className="life-area-font-size"
                  style={
                    j < 2
                      ? greenCell
                      : redCell
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Lord Factors Table */}
      <table className="life-area-table">
        <colgroup>
            {lordHeaders.map((_, index) => (
              <col key={index} style={{ width: `${100 / lordHeaders.length}%` }} />
            ))}
        </colgroup>
        <thead>
          <tr>
            {lordHeaders.map((h, i) => (
              <th key={i} className='life-area-font-size' style={headerYellow}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lordRows.map((row, i) => (
            <tr key={i}>
              <td className='life-area-font-size' style={leftCol}>{row[0]}</td>
              {row.slice(1).map((cell, j) => (
                <td
                  key={j}
                  className='life-area-font-size'
                  style={
                    j < 2
                      ? greenCell
                      : redCell
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LifeAreaSection;