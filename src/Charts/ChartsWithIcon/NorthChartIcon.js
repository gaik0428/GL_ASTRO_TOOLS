import React from 'react';

// Area labels and icons for each house
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

const housePositionMap = {
  1: '1st-house',
  2: '2nd-house',
  3: '3rd-house',
  4: '4th-house',
  5: '5th-house',
  6: '6th-house',
  7: '7th-house',
  8: '8th-house',
  9: '9th-house',
  10: '10th-house',
  11: '11th-house',
  12: '12th-house'
};

// Position styles for each house (reuse from NorthChart)
const getPositionStyles = (position) => {
  const positions = {
    '1st-house': { top: 0, left: 0 },
    '2nd-house': { top: '6%', right: '93%' },
    '3rd-house': { top: '41%', right: '91%' },
    '4th-house': { bottom: 0, left: 0 },
    '5th-house': { bottom: '-41%', right: '40%' },
    '6th-house': { bottom: '-43%', left: '42%' },
    '7th-house': { bottom: '0', left: '50%' },
    '8th-house': { top: '42%', left: '93%' },
    '9th-house': { bottom: '41%', right: '-42%' },
    '10th-house': { bottom: '51%', right: '-1%' },
    '11th-house': { top: '-41%', right: '9%' },
    '12th-house': { bottom: '95%', right: '41%' }
  };
  return positions[position] || {};
};

// Sign number positions (reuse from NorthChart)
const getSignPositionStyles = (houseNo) => {
  const signPositions = {
    1: { top: '18%', left: '18%' },
    2: { top: '19%', right: '82%' },
    3: { top: '31%', right: '83%' },
    4: { top: '32%', right: '33%' },
    5: { top: '82%', left: '18%' },
    6: { bottom: '-32%', right: '19%' },
    7: { bottom: '18%', right: '18%' },
    8: { bottom: '19%', right: '-32%' },
    9: { bottom: '31%', right: '-32%' },
    10: { bottom: '33%', right: '18%' },
    11: { bottom: '83%', right: '18%' },
    12: { bottom: '82%', right: '31%' }
  };
  return signPositions[houseNo] || {};
};

const signNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1];

const NorthChartIcon = () => {
  return (
    <div style={{ paddingLeft: '10px' }}>
      <div style={{
        width: '450px',
        height: '450px',
        border: '10px solid black',
        position: 'relative',
        boxSizing: 'border-box',
        background: "#fff"
      }}>
        {/* Diagonal Lines */}
        <div style={{
          position: 'absolute',
          width: '620px',
          height: '4px',
          background: 'black',
          top: '50%',
          left: '50%',
          transformOrigin: 'center',
          border: '1px solid black',
          transform: 'translate(-50%, -50%) rotate(45deg)'
        }}></div>
        <div style={{
          position: 'absolute',
          width: '620px',
          height: '4px',
          background: 'black',
          top: '50%',
          left: '50%',
          transformOrigin: 'center',
          border: '1px solid black',
          transform: 'translate(-50%, -50%) rotate(-45deg)'
        }}></div>

        {/* Diamond */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '70.7%',
          height: '70.7%',
          border: '6px solid black',
          transform: 'translate(-50%, -50%) rotate(45deg)',
          boxSizing: 'border-box'
        }}>
          {/* Render all houses with their area labels */}
          {Array.from({ length: 12 }, (_, i) => {
            const houseNo = i + 1;
            const position = housePositionMap[houseNo];
            const area = areaLabels[houseNo];
            return (
              <div
                key={houseNo}
                style={{
                  position: 'absolute',
                  width: '50%',
                  height: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  fontSize: '13px',
                  ...getPositionStyles(position)
                }}
              >
                <div style={{
                  transform: 'rotate(-45deg)',
                  display: 'inline-block',
                  color: area ? "#d60000" : "#222",
                  fontWeight: area ? 700 : 400,
                  fontSize: area ? 32 : 13,
                  lineHeight: 1.1,
                  textAlign: "center"
                }}>
                  {area && (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span style={{ fontSize: 22, marginRight: 0 }}>{area.icon}</span>
                      <span style={{ fontSize: 20, marginTop: 2 }}>{area.label}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Render sign numbers for all houses */}
          {Array.from({ length: 12 }, (_, i) => {
            const houseNo = i + 1;
            return (
              <div
                key={`sign-${houseNo}`}
                style={{
                  position: 'absolute',
                  width: '50%',
                  height: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  userSelect: 'none',
                  pointerEvents: 'none',
                  transform: 'rotate(-45deg)',
                  color: 'red',
                  ...getSignPositionStyles(houseNo)
                }}
              >
                {signNumbers[i].toString().padStart(2, '0')}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NorthChartIcon;