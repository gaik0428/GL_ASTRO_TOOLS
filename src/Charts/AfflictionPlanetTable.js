import React, { useState } from 'react';

const data = [
  {
    planet: "Sun",
    freeWill: "46%",
    soumya: 1,
    lords159: 1,
    krura: 2,
    lords6812: 1,
    dispositor: 0,
    exchange: 0,
    seperative: 2,
    dashvarga: 3,
  },
  {
    planet: "Moon",
    freeWill: "0%",
    soumya: 1,
    lords159: 1,
    krura: 3,
    lords6812: 2,
    dispositor: 1,
    exchange: 0,
    seperative: 3,
    dashvarga: 7,
  },
  {
    planet: "Mars",
    freeWill: "29%",
    soumya: 1,
    lords159: 0,
    krura: 1,
    lords6812: 0,
    dispositor: 0,
    exchange: 0,
    seperative: 0,
    dashvarga: 9,
  },
  {
    planet: "Mercury",
    freeWill: "75%",
    soumya: 1,
    lords159: 1,
    krura: 0,
    lords6812: 0,
    dispositor: 1,
    exchange: 0,
    seperative: 0,
    dashvarga: 9,
  },
  {
    planet: "Jupiter",
    freeWill: "71%",
    soumya: 0,
    lords159: 1,
    krura: 3,
    lords6812: 2,
    dispositor: 0,
    exchange: 0,
    seperative: 4,
    dashvarga: 4,
  },
  {
    planet: "Venus",
    freeWill: "75%",
    soumya: 1,
    lords159: 1,
    krura: 0,
    lords6812: 0,
    dispositor: 1,
    exchange: 0,
    seperative: 0,
    dashvarga: 7,
  },
  {
    planet: "Saturn",
    freeWill: "46%",
    soumya: 1,
    lords159: 0,
    krura: 2,
    lords6812: 1,
    dispositor: 0,
    exchange: 0,
    seperative: 3,
    dashvarga: 7,
  },
  {
    planet: "Rahu",
    freeWill: "38%",
    soumya: 1,
    lords159: 0,
    krura: 1,
    lords6812: 1,
    dispositor: 0,
    exchange: 0,
    seperative: 1,
    dashvarga: 0,
  },
  {
    planet: "Ketu",
    freeWill: "0%",
    soumya: 2,
    lords159: 1,
    krura: 2,
    lords6812: 2,
    dispositor: 1,
    exchange: 0,
    seperative: 2,
    dashvarga: 0,
  },
];

const header = [
  "Planet",
  "Free Will",
  "Soumya",
  "159 Lords",
  "Krura",
  "6812 Lords",
  "Dispositor",
  "Exchange",
  "Seperative",
  "Dashvarga",
];

const columnKeyMap = {
  "Planet": "planet",
  "Free Will": "freeWill",
  "Soumya": "soumya",
  "159 Lords": "lords159",
  "Krura": "krura",
  "6812 Lords": "lords6812",
  "Dispositor": "dispositor",
  "Exchange": "exchange",
  "Seperative": "seperative",
  "Dashvarga": "dashvarga"
};

const cellStyle = {
  border: "2px solid black",
  fontWeight: 700,
  fontSize: 18,
  textAlign: "center",
  padding: "8px 10px",
  fontFamily: "Segoe UI, Arial, sans-serif",
};

const getCellBg = (col, val) => {
  if (col === "Planet") return "#0070b8";

  if (col === "Free Will") {
    const numericVal = parseInt(val);
    if (numericVal >= 70) return "#c6ec3b";
    return "#fff";
  }

  if (["Soumya", "159 Lords", "Dispositor", "Exchange", "Dashvarga"].includes(col))
    return "#c6ec3b";

  if (["Krura", "6812 Lords", "Seperative"].includes(col))
    return "#f41e1e";

  return "#fff";
};

const getCellColor = (col, row, val) => {
  if (col === "Planet") return "#fff";
  if (col === "Free Will") return "#222";
  if (["Krura", "6812 Lords", "Seperative"].includes(col)) return "#fff";
  return "#222";
};

const AfflictionPlanetTable = () => {
  const [showPlanetNames, setShowPlanetNames] = useState(true);

  const toggleStyle = {
    position: 'relative',
    width: '60px',
    height: '30px',
    backgroundColor: showPlanetNames ? '#0070b8' : 'white',
    borderRadius: '20px',
    border: '2px solid #0070b8',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const sliderStyle = {
    position: 'absolute',
    top: '3px',
    left: showPlanetNames ? '32px' : '6px',
    width: '20px',
    height: '20px',
    backgroundColor: showPlanetNames ? 'white' : '#0070b8',
    borderRadius: '50%',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={{ overflowX: "auto", marginTop: "80px", marginLeft: "25px", marginBottom: "75px"}}>
        {/* Toggle Container */}
        <div style={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            alignItems: 'center', 
            marginBottom: '20px',
            gap: '12px',
            marginRight: '70px',
        }}>
            <div 
            style={toggleStyle}
            onClick={() => setShowPlanetNames(!showPlanetNames)}
            >
            <div style={sliderStyle}></div>
            </div>
            <span style={{ 
            fontSize: '18px', 
            fontWeight: '700', 
            color: '#333',
            fontFamily: "Segoe UI, Arial, sans-serif"
            }}>
            Name of the Planets
            </span>

        </div>
        <table style={{ borderCollapse: "collapse", minWidth: 800, width: "98%", tableLayout: "fixed" }}>
          <colgroup>
            {header.map((_, index) => (
              <col key={index} style={{ width: `${100 / header.length}%` }} />
            ))}
          </colgroup>
          <thead>
            <tr>
              {header.map((col) => (
                <th
                  key={col}
                  style={{
                    ...cellStyle,
                    background: "#0070b8",
                    color: "#fff",
                    fontSize: 18,
                    border: "2px solid black",
                  }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.planet}>
                {header.map((col) => (
                  <td
                    key={col}
                    style={{
                      ...cellStyle,
                      background: getCellBg(col, row[columnKeyMap[col]]),
                      color: getCellColor(col, row, row[columnKeyMap[col]]),
                      borderLeft: "2px solid black",
                      borderRight: "2px solid black",
                    }}
                  >
                    {row[columnKeyMap[col]]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
                    
    </div>
  );
};

export default AfflictionPlanetTable;