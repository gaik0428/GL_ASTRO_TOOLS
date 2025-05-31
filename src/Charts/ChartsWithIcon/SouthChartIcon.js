import React from 'react';

// Area labels and icons for each house (same as AreaSection)
const areaLabels = {
  3: {
    icon: "🛫",
    label: (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1 }}>
        <span>&nbsp;</span>
        <span style={{ color: "#222", fontWeight: 700, fontSize: 12 }}>
          Change <span>1️⃣</span>
        </span>
      </div>
    )
  },
  6: { icon: "⛏", label: <span style={{ fontWeight: 700, color: "#d60000" }}>Job</span> },
  7: { icon: "💼", label: <span style={{ fontWeight: 700, color: "#d60000" }}>Business</span> },
  1: { icon: "🫵", label: <span style={{ fontWeight: 700, color: "#d60000" }}>Client</span> },
  9: {
    icon: "🛫",
    label: (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1 }}>
        <span>&nbsp;</span>
        <span style={{ color: "#222", fontWeight: 700, fontSize: 12 }}>
          Change <span>2️⃣</span>
        </span>
      </div>
    )
  },
  10: { icon: "🎖", label: <span style={{ fontWeight: 700, color: "#d60000" }}>Promotion</span> },
};

// South Indian chart layout - 4x4 grid with specific house positions
const southLayout = [
  [11, 12, 1, 2],
  [10, null, null, 3],
  [9, null, null, 4],
  [8, 7, 6, 5]
];

// Sign numbers for each house (same as your previous code)
const signNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1];

const getAreaContent = (houseNo) => {
  const area = areaLabels[houseNo];
  if (!area) return null;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <span style={{ fontSize: 22 }}>{area.icon}</span>
      <span style={{ fontSize: 16, marginTop: 2 }}>{area.label}</span>
    </div>
  );
};

const getSignNumber = (houseNo) => {
  // houseNo: 1-12, signNumbers[houseNo-1]
  return (
    <div
      style={{
        position: 'absolute',
        top: 4,
        left: 6,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
        pointerEvents: 'none',
        userSelect: 'none'
      }}
    >
      {signNumbers[houseNo - 1]}
    </div>
  );
};

const SouthChartIcon = () => {
  return (
    <div style={{
      width: '450px',
      height: '450px',
      border: '3px solid black',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(4, 1fr)',
      boxSizing: 'border-box',
      position: 'relative',
      background: '#fff',
      margin: "0"
    }}>
      {/* Central big square */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '50%',
          height: '50%',
          border: '3px solid black',
          boxSizing: 'border-box',
          pointerEvents: 'none',
          zIndex: 2,
          background: 'transparent'
        }}
      />
      {southLayout.map((row, rowIndex) =>
        row.map((houseNo, colIndex) => (
          houseNo ? (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                border: '3px solid black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                position: 'relative',
                zIndex: 3,
                fontWeight: 700,
                fontSize: 16,
                color: areaLabels[houseNo] ? "#d60000" : "#222",
                textAlign: "center",
                minWidth: 0,
                minHeight: 0
              }}
            >
              {getSignNumber(houseNo)}
              {getAreaContent(houseNo)}
            </div>
          ) : (
            // Render an empty cell with no border and no background
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                background: 'transparent',
                border: 'none',
                zIndex: 1,
                minWidth: 0,
                minHeight: 0
              }}
            />
          )
        ))
      )}
    </div>
  );
};

export default SouthChartIcon;