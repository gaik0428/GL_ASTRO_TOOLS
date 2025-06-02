import React from 'react';

const planetData = [
  { planet: 'Sun', shadbala: 358.77, inRupas: 5.98, strengthPercent: 119.59, ishtaPhala: 3.4, kashtaPhala: 49 },
  { planet: 'Moon', shadbala: 447.96, inRupas: 7.47, strengthPercent: 124.43, ishtaPhala: 37.75, kashtaPhala: 20.95 },
  { planet: 'Mars', shadbala: 349.05, inRupas: 5.82, strengthPercent: 116.35, ishtaPhala: 13.52, kashtaPhala: 34.13 },
  { planet: 'Mercury', shadbala: 436.52, inRupas: 7.28, strengthPercent: 103.93, ishtaPhala: 37.24, kashtaPhala: 22.61 },
  { planet: 'Jupiter', shadbala: 459.56, inRupas: 7.66, strengthPercent: 117.84, ishtaPhala: 41.32, kashtaPhala: 18.26 },
  { planet: 'Venus', shadbala: 442.88, inRupas: 7.38, strengthPercent: 134.21, ishtaPhala: 16.72, kashtaPhala: 40.5 },
  { planet: 'Saturn', shadbala: 436.51, inRupas: 7.28, strengthPercent: 145.5, ishtaPhala: 19.44, kashtaPhala: 36.27 }
];

const headerStyle = {
  background: '#0074d9',
  color: '#fff',
  fontWeight: 700,
  fontSize: 20,
  border: '2px solid #222',
  padding: '6px 30px',
  textAlign: 'center'
};

const cellStyle = {
  border: '2px solid #222',
  fontSize: 20,
  fontWeight: 700,
  padding: '6px 30px',
  textAlign: 'center'
};

const planetCellStyle = {
  ...cellStyle,
  background: '#0074d9',
  color: '#fff',
  fontWeight: 700
};

const StrengthTable = () => (
  <div style={{ overflowX: 'auto', marginBottom: '40px', maxWidth: 1000, margin: '0 auto' }}>
    <table style={{ borderCollapse: 'collapse', width: '90%', background: '#fff' }}>
      <thead>
        <tr>
          <th style={headerStyle}>Planets</th>
          <th style={headerStyle}>Shadbala</th>
          <th style={headerStyle}>In rupas</th>
          <th style={headerStyle}>% Strength</th>
          <th style={headerStyle}>IshtaPhala</th>
          <th style={headerStyle}>KashtaPhala</th>
        </tr>
      </thead>
      <tbody>
        {planetData.map((row, idx) => (
          <tr key={row.planet}>
            <td style={planetCellStyle}>{row.planet}</td>
            <td style={{ ...cellStyle, fontWeight: 700 }}>{row.shadbala}</td>
            <td style={cellStyle}>{row.inRupas}</td>
            <td style={cellStyle}>{row.strengthPercent}</td>
            <td style={cellStyle}>{row.ishtaPhala}</td>
            <td style={cellStyle}>{row.kashtaPhala}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default StrengthTable;