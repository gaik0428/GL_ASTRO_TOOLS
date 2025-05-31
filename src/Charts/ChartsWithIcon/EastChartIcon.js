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
  11: { icon: "🎖", label: <span style={{ fontWeight: 700, color: "#d60000" }}>Promotion</span> },
};

// Helper to render area label and house number
const renderHouseContent = (houseNo, center = false) => {
  const area = areaLabels[houseNo];
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: center ? 'center' : 'flex-start',
      position: 'relative'
    }}>
      {/* House number in line with icon, or centered if center cell */}
      <span style={{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red',
        marginTop: center ? 0 : 8,
        marginBottom: area ? 2 : 0,
        textAlign: 'center'
      }}>
        {houseNo.toString().padStart(2, '0')}
      </span>
      {/* Area label */}
      {area && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{ fontSize: 22 }}>{area.icon}</span>
          <span style={{ fontSize: 16, marginTop: 2 }}>{area.label}</span>
        </div>
      )}
    </div>
  );
};

const EastChartIcon = () => {
  return (
    <div style={{ paddingLeft: '10px' }}>
      {/* East Indian Chart - 3x3 Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 146px)',
        gridTemplateRows: 'repeat(3, 146px)',
        border: '4px solid black',
        backgroundColor: 'black',
        gap: '2px',
        width: '443px',
      }}>
        {/* Top-left corner - split diagonally (Houses 1 and 2) */}
        <div style={{
          position: 'relative',
          backgroundColor: 'white',
          border: '2px solid black',
        }}>
          {/* Diagonal line */}
          <div style={{
            position: 'absolute',
            width: '200px',
            backgroundColor: 'black',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            transformOrigin: 'center',
            height: '4px',
          }}></div>
          {/* House 1 (top triangle) */}
          <div style={{
            position: 'absolute',
            top: '0%',
            left: '70%',
            transform: 'translate(-50%, 0)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(2)}
          </div>
          {/* House 2 (bottom triangle) */}
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '25%',
            transform: 'translate(-50%, 0)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(3)}
          </div>
        </div>

        {/* Top center - House 12 */}
        <div style={{
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid black',
        }}>
          {renderHouseContent(1)}
        </div>

        {/* Top-right corner - split diagonally (Houses 11 and 10) */}
        <div style={{
          position: 'relative',
          backgroundColor: 'white',
          border: '2px solid black',
        }}>
          {/* Diagonal line */}
          <div style={{
            position: 'absolute',
            width: '200px',
            backgroundColor: 'black',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-45deg)',
            transformOrigin: 'center',
            height: '4px',
          }}></div>
          {/* House 11 (top triangle) */}
          <div style={{
            position: 'absolute',
            top: '0%',
            left: '30%',
            transform: 'translate(-50%, 0)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(12)}
          </div>
          {/* House 10 (bottom triangle) */}
          <div style={{
            position: 'absolute',
            bottom: '5%',
            left: '70%',
            transform: 'translate(-50%, 0)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(11)}
          </div>
        </div>

        {/* Middle left - House 3 */}
        <div style={{
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          border: '2px solid black',
        }}>
          {renderHouseContent(4, true)}
        </div>

        {/* Center - House 4 (number centered) */}
        <div style={{
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid black',
        }}>
        </div>

        {/* Middle right - House 9 */}
        <div style={{
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          border: '2px solid black',
        }}>
          {renderHouseContent(10, true)}
        </div>

        {/* Bottom-left corner - split diagonally (Houses 5 and 6) */}
        <div style={{
          position: 'relative',
          backgroundColor: 'white',
          border: '2px solid black',
        }}>
          {/* Diagonal line */}
          <div style={{
            position: 'absolute',
            width: '200px',
            backgroundColor: 'black',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-45deg)',
            transformOrigin: 'center',
            height: '4px',
          }}></div>
          {/* House 5 (left triangle) */}
          <div style={{
            position: 'absolute',
            top: '0%',
            left: '25%',
            transform: 'translate(-50%, 0)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(5)}
          </div>
          {/* House 6 (right triangle) */}
          <div style={{
            position: 'absolute',
            top: '35%',
            left: '80%',
            transform: 'translate(-50%, 0)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(6)}
          </div>
        </div>

        {/* Bottom center - House 7 */}
        <div style={{
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          border: '2px solid black',
        }}>
          {renderHouseContent(7)}
        </div>

        {/* Bottom-right corner - split diagonally (Houses 8 and 9) */}
        <div style={{
          position: 'relative',
          backgroundColor: 'white',
          border: '2px solid black',
        }}>
          {/* Diagonal line */}
          <div style={{
            position: 'absolute',
            width: '200px',
            backgroundColor: 'black',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            transformOrigin: 'center',
            height: '4px',
          }}></div>
          {/* House 8 (left triangle) */}
          <div style={{
            position: 'absolute',
            top: '60%',
            left: '10%',
            transform: 'translate(-50%, 0)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(8)}
          </div>
          {/* House 9 (right triangle) */}
          <div style={{
            position: 'absolute',
            top: '-5%',
            left: '80%',
            transform: 'translate(-50%, 0)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(9)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EastChartIcon;