import React from 'react';
import './SouthChart.css';

const SouthChart = () => {
  // Same chart data as the North chart
  // JSON data that show all houses having 4 planets 
//   const planetSymbols = ['Su', 'Mo', 'Me', 'Ve', 'Ma', 'Ju', 'Sa', 'Ra', 'Ke', 'As', 'Ur', 'Ne', 'Pl'];
//   const chartData = Array.from({ length: 12 }, (_, i) => ({
//     HouseNo: i + 1,
//     SignNo: ((i + 1) % 12) + 1,
//     Planets: Array.from({ length: 4 }, (_, j) => ({
//       Symbol: planetSymbols[(i + j) % planetSymbols.length],
//       Degree: (i * 10 + j * 5) % 30,
//       Minute: 0,
//       Second: 0
//     }))
//   }));

  const chartData = [
    {
      "HouseNo": 1,
      "SignNo": 2,
      "Planets": [
        {
          "Symbol": "Ve",
          "Degree": 0,
          "Minute": 0,
          "Second": 0
        },
        {
          "Symbol": "As",
          "Degree": 8,
          "Minute": 0,
          "Second": 0
        }
      ]
    },
    {
      "HouseNo": 2,
      "SignNo": 3,
      "Planets": []
    },
    {
      "HouseNo": 3,
      "SignNo": 4,
      "Planets": []
    },
    {
      "HouseNo": 4,
      "SignNo": 5,
      "Planets": [
        {
          "Symbol": "Ma",
          "Degree": 23,
          "Minute": 0,
          "Second": 0
        }
      ]
    },
    {
      "HouseNo": 5,
      "SignNo": 6,
      "Planets": [
        {
          "Symbol": "Ra",
          "Degree": 4,
          "Minute": 0,
          "Second": 0
        }
      ]
    },
    {
      "HouseNo": 6,
      "SignNo": 7,
      "Planets": []
    },
    {
      "HouseNo": 7,
      "SignNo": 8,
      "Planets": []
    },
    {
      "HouseNo": 8,
      "SignNo": 9,
      "Planets": []
    },
    {
      "HouseNo": 9,
      "SignNo": 10,
      "Planets": [
        {
          "Symbol": "Ju",
          "Degree": 26,
          "Minute": 0,
          "Second": 0
        }
      ]
    },
    {
      "HouseNo": 10,
      "SignNo": 11,
      "Planets": []
    },
    {
      "HouseNo": 11,
      "SignNo": 12,
      "Planets": [
        {
          "Symbol": "Sa",
          "Degree": 20,
          "Minute": 0,
          "Second": 0
        },
        {
          "Symbol": "Ke",
          "Degree": 4,
          "Minute": 0,
          "Second": 0
        }
      ]
    },
    {
      "HouseNo": 12,
      "SignNo": 1,
      "Planets": [
        {
          "Symbol": "Su",
          "Degree": 21,
          "Minute": 0,
          "Second": 0
        },
        {
          "Symbol": "Mo",
          "Degree": 10,
          "Minute": 0,
          "Second": 0
        },
        {
          "Symbol": "Me",
          "Degree": 5,
          "Minute": 0,
          "Second": 0
        }
      ]
    }
  ];

  // Get house data by house number
  const getHouseData = (houseNo) => {
    return chartData.find(house => house.HouseNo === houseNo);
  };

  // Format planet display
  const formatPlanets = (planets) => {
    if (!planets || planets.length === 0) return null;
    
    if (planets.length === 1) {
      return (
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontWeight: 700 }}>
            {planets[0].Symbol}
          </span>
        </div>
      );
    }
    
    if (planets.length === 2) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'center' }}>
          {planets.map((planet, idx) => (
            <span key={idx} style={{ fontWeight: 700 }}>
              {planet.Symbol}
            </span>
          ))}
        </div>
      );
    }
    
    if (planets.length === 3) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
            <span style={{ fontWeight: 700 }}>
              {planets[0].Symbol}
            </span>
            <span style={{ fontWeight: 700 }}>
              {planets[1].Symbol}
            </span>
          </div>
          <div style={{ marginTop: '2px' }}>
            <span style={{ fontWeight: 700 }}>
              {planets[2].Symbol}
            </span>
          </div>
        </div>
      );
    }
    
    // 4+ planets: 2x2 grid
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2px',
        justifyItems: 'center'
      }}>
        {planets.map((planet, idx) => (
          <span key={idx} style={{ fontWeight: 700, fontSize: '11px' }}>
            {planet.Symbol}
          </span>
        ))}
      </div>
    );
  };

  // South Indian chart layout - 4x4 grid with specific house positions
  const southLayout = [
    [11, 12, 1, 2],
    [10, null, null, 3],
    [9, null, null, 4],
    [8, 7, 6, 5]
  ];

  const getCellContent = (houseNo) => {
    if (!houseNo) return null;

    const houseData = getHouseData(houseNo);
    if (!houseData) return null;

    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: '4px'
      }}>
        {/* House number (SignNo) display */}
        <div style={{
          position: 'absolute',
          top: '4px',
          left: '6px',
          fontSize: '11px',
          fontWeight: 'bold',
          color: 'red'
        }}>
          {houseData.SignNo}
        </div>
        {/* Planets in center */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          fontSize: '12px'
        }}>
          {formatPlanets(houseData.Planets)}
        </div>
      </div>
    );
  };

  return (
    <div style={{ paddingLeft: '10px' }}>

      {/* South Indian Chart Grid */}
      <div className='south-grid'>
        <div
          style={{
            position: 'absolute',
            top: '25%',
            left: '25%',
            width: '50%',
            height: '50%',
            border: '2.5px solid black',
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
                  border: '2.5px solid black',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  position: 'relative',
                  zIndex: 3
                }}
              >
                {getCellContent(houseNo)}
              </div>
            ) : (
              // Render an empty cell with no border and no background
              <div
                key={`${rowIndex}-${colIndex}`}
                style={{
                  background: 'transparent',
                  border: 'none',
                  zIndex: 1
                }}
              />
            )
          ))
        )}
      </div>
    </div>
  );
};

export default SouthChart;