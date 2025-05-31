import React, { useState } from 'react';

const data = [
  {
    house: "1st House",
    freeWill: "75.0%",
    soumya: 0,
    lords159: 0,
    krura: 1,
    lords6812: 0,
    dispositor: 0,
    exchange: 0,
    seperative: 1,
    digbala: 'Digbala',
    kaalbala: 'Bali'
  },
  {
    house: "2nd House",
    freeWill: "75.0%",
    soumya: 2,
    lords159: 2,
    krura: 0,
    lords6812: 0,
    dispositor: 1,
    exchange: 0,
    seperative: 0,
    digbala: '',
    kaalbala: 'Bali'
  },
  {
    house: "3rd House",
    freeWill: "50.0%",
    soumya: 1,
    lords159: 1,
    krura: 3,
    lords6812: 2,
    dispositor: 0,
    exchange: 0,
    seperative: 4,
    digbala: '',
    kaalbala: ''
  },
  {
    house: "4th House",
    freeWill: "71.0%",
    soumya: 0,
    lords159: 0,
    krura: 0,
    lords6812: 0,
    dispositor: 0,
    exchange: 0,
    seperative: 0,
    digbala: 'Nirbala',
    kaalbala: ''
  },
  {
    house: "5th House",
    freeWill: "37.5%",
    soumya: 1,
    lords159: 0,
    krura: 2,
    lords6812: 1,
    dispositor: 0,
    exchange: 0,
    seperative: 1,
    digbala: '',
    kaalbala: ''
  },
  {
    house: "6th House",
    freeWill: "46.0%",
    soumya: 0,
    lords159: 1,
    krura: 0,
    lords6812: 0,
    dispositor: 1,
    exchange: 0,
    seperative: 0,
    digbala: '',
    kaalbala: 'Bali'
  },
  {
    house: "7th House",
    freeWill: "71.0%",
    soumya: 1,
    lords159: 0,
    krura: 1,
    lords6812: 0,
    dispositor: 1,
    exchange: 0,
    seperative: 1,
    digbala: '',
    kaalbala: ''
  },
  {
    house: "8th House",
    freeWill: "59.7%",
    soumya: 2,
    lords159: 2,
    krura: 0,
    lords6812: 0,
    dispositor: 1,
    exchange: 0,
    seperative: 0,
    digbala: '',
    kaalbala: ''
  },
  {
    house: "9th House",
    freeWill: "55.7%",
    soumya: 1,
    lords159: 1,
    krura: 3,
    lords6812: 2,
    dispositor: 0,
    exchange: 0,
    seperative: 4,
    digbala: '',
    kaalbala: ''
  },
    {
    house: "10th House",
    freeWill: "75.0%",
    soumya: 0,
    lords159: 0,
    krura: 0,
    lords6812: 0,
    dispositor: 0,
    exchange: 0,
    seperative: 0,
    digbala: '',
    kaalbala: 'Bali'
  },
  {
    house: "11th House",
    freeWill: "0.0%",
    soumya: 2,
    lords159: 1,
    krura: 3,
    lords6812: 2,
    dispositor: 1,
    exchange: 0,
    seperative: 3,
    digbala: '',
    kaalbala: ''
  },
  {
    house: "12th House",
    freeWill: "46.0%",
    soumya: 0,
    lords159: 0,
    krura: 1,
    lords6812: 1,
    dispositor: 0,
    exchange: 0,
    seperative: 1,
    digbala: '',
    kaalbala: ''
  },
];

const columnWidth = 120; 

const header = [
  "House",
  "Free Will",
  "Soumya",
  "159 Lords",
  "Krura",
  "6812 Lords",
  "Dispositor",
  "Exchange",
  "Seperative",
  "Digbala",
  "Kaalbala"
];

const columnKeyMap = {
  "House": "house",
  "Free Will": "freeWill",
  "Soumya": "soumya",
  "159 Lords": "lords159",
  "Krura": "krura",
  "6812 Lords": "lords6812",
  "Dispositor": "dispositor",
  "Exchange": "exchange",
  "Seperative": "seperative",
  "Digbala": "digbala",
  "Kaalbala": "kaalbala"
};

const cellStyle = {
  border: "2px solid black",
  fontWeight: 700,
  fontSize: 15,
  textAlign: "center",
  padding: "7px 10px",
  fontFamily: "Segoe UI, Arial, sans-serif",
};

const getCellBg = (col, val) => {
  if (col === "House") return "#0070b8";

  if (col === "Free Will") {
    const numericVal = parseInt(val);
    if (numericVal >= 50) return "#c6ec3b";
    return "#fff";
  }

  if (col === "Digbala") {
    if (val === "Nirbala") return "#f41e1e";
    return "#c6ec3b";
  }

  if (["Soumya", "159 Lords", "Dispositor", "Exchange", "Kaalbala"].includes(col))
    return "#c6ec3b";

  if (["Krura", "6812 Lords", "Seperative"].includes(col))
    return "#f41e1e";

  return "#fff";
};

const getCellColor = (col, row, val) => {
  if (col === "House") return "#fff";
  if (col === "Free Will") return "#222";
  if (["Krura", "6812 Lords", "Seperative"].includes(col)) return "#fff";
  if (col === "Digbala") {
    if (val === "Nirbala") return "#fff";
  }
  return "#222";
};

const HouseTable = () => {
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
    <div style={{ overflowX: "auto", marginTop: "60px", marginLeft: "20px", marginBottom: "72px"}}>
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
            fontSize: '15px', 
            fontWeight: '700', 
            color: '#333',
            fontFamily: "Segoe UI, Arial, sans-serif"
            }}>
            Name of the Planets
            </span>

        </div>
        <table style={{ borderCollapse: "collapse", minWidth: 800, width: "97%" }}>
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
                    fontSize: 15,
                    border: "2px solid black",
                }}
                >
                {col}
                </th>
            ))}
            </tr>
        </thead>
        <tbody>
            {data.map((row, i) => (
            <tr key={row.planet}>
                {header.map((col, j) => (
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

export default HouseTable;