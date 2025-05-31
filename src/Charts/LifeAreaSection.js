import React, { useState } from "react";

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
  fontSize: 16,
  textAlign: "center",
  padding: "4px 0",
  fontFamily: "Segoe UI, Arial, sans-serif"
};

const headerBlue = {
  ...cellStyle,
  background: "#2f75b5",
  color: "#fff",
  fontWeight: 700,
  fontSize: 20
};

const headerYellow = {
  ...cellStyle,
  background: "#ffc000",
  color: "#222",
  fontWeight: 700,
  fontSize: 20
};

const leftCol = {
  ...cellStyle,
  background: "#fff",
  color: "#222",
  fontWeight: 700,
  fontSize: 16,
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

const LifeAreaSection = () => {
  const [toggle, setToggle] = useState(true);


  return (
    <div style={{ background: "#fff", padding: 0, width: 1100, marginTop: 150, marginLeft: 40, marginBottom: 142 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Section Title */}
        <div style={{
          background: "#2f75b5",
          color: "#fff",
          fontWeight: 700,
          fontSize: 24,
          padding: "8px 18px",
          width: 340,
          borderRadius: 3,
          marginBottom: 10
        }}>
          Career <span style={{ float: "right", fontSize: 24, fontWeight: 400 }}>&#9660;</span>
        </div>
        {/* Toggle */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
          <button
            onClick={() => setToggle((v) => !v)}
            aria-pressed={toggle}
            style={{
              width: 90,
              height: 48,
              border: "4px solid #1e7fc1",
              borderRadius: 30,
              display: "flex",
              alignItems: "center",
              marginRight: 18,
              background: toggle ? "#1e7fc1" : "transparent",
              cursor: "pointer",
              padding: 0,
              outline: "none",
              position: "relative",
              transition: "background 0.2s"
            }}
          >
            <div style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: toggle ? "#fff" : "#0070b8",
              marginLeft: toggle ? 42 : 2,
              transition: "margin 0.2s, background 0.2s"
            }} />
          </button>
          <span style={{ fontSize: 20, fontWeight: 700, color: "#222" }}>Prediction through Rashi</span>
        </div>
      </div>
      {/* House Factors Table */}
      <table style={{ borderCollapse: "collapse", width: "100%", marginBottom: 18 }}>
        <colgroup>
          {houseHeaders.map((_, index) => (
            <col key={index} style={{ width: `${100 / houseHeaders.length}%` }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {houseHeaders.map((h, i) => (
              <th key={i} style={headerBlue}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {houseRows.map((row, i) => (
            <tr key={i}>
              <td style={leftCol}>{row[0]}</td>
              {row.slice(1).map((cell, j) => (
                <td
                  key={j}
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
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <colgroup>
            {lordHeaders.map((_, index) => (
              <col key={index} style={{ width: `${100 / lordHeaders.length}%` }} />
            ))}
        </colgroup>
        <thead>
          <tr>
            {lordHeaders.map((h, i) => (
              <th key={i} style={headerYellow}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lordRows.map((row, i) => (
            <tr key={i}>
              <td style={leftCol}>{row[0]}</td>
              {row.slice(1).map((cell, j) => (
                <td
                  key={j}
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