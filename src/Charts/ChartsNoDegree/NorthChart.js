import React from 'react';
import './NorthChart.css';

const NorthChart = () => {
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

  // Sample json
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

  // Map house numbers to their positions in the chart
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

  // Get house data by house number
  const getHouseData = (houseNo) => {
    return chartData.find(house => house.HouseNo === houseNo);
  };

  // Format planet display
  const formatPlanets = (planets, houseNo) => {
    if (!planets || planets.length === 0) return null;
    if (planets.length === 1) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <span style={{ fontWeight: 700 }}>
            {planets[0].Symbol}
          </span>
        </div>
      );
    }
    if (planets.length === 2) {
      // For house 3, 5, 9, 11: display vertically
      if ([3, 5, 9, 11].includes(houseNo)) {
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            {planets.map((planet, idx) => (
              <span key={idx} style={{ fontWeight: 700 }}>
                {planet.Symbol}
              </span>
            ))}
          </div>
        );
      }
      // Default: side by side
      return (
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          {planets.map((planet, idx) => (
            <span key={idx} style={{ fontWeight: 700 }}>
              {planet.Symbol}
            </span>
          ))}
        </div>
      );
    }
    if (planets.length === 3) {
      // First two in a row, third centered below
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
            <span style={{ fontWeight: 700 }}>
              {planets[0].Symbol}
            </span>
            <span style={{ fontWeight: 700 }}>
              {planets[1].Symbol}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
            <span style={{ fontWeight: 700 }}>
              {planets[2].Symbol}
            </span>
          </div>
        </div>
      );
    }
    // 4 planets: 2x2 grid
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4px 8px',
        justifyItems: 'center',
        alignItems: 'center',
        height: '100%'
      }}>
        {planets.map((planet, idx) => (
          <span key={idx} style={{ fontWeight: 700 }}>
            {planet.Symbol}
          </span>
        ))}
      </div>
    );
  };

  // Get position styles for each house position
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

  // Get sign position styles for each house
  const getSignPositionStyles = (houseNo) => {
    const signPositions = {
      1: { top: '18%', left: '18%' },      // House 1 - Sign 2
      2: { top: '19%', right: '82%' },     // House 2 - Sign 3
      3: { top: '31%', right: '83%' },     // House 3 - Sign 4
      4: { top: '32%', right: '33%' },     // House 4 - Sign 5
      5: { top: '82%', left: '18%' },      // House 5 - Sign 6
      6: { bottom: '-32%', right: '19%' },  // House 6 - Sign 7
      7: { bottom: '18%', right: '18%' },  // House 7 - Sign 8
      8: { bottom: '19%', right: '-32%' },  // House 8 - Sign 9
      9: { bottom: '31%', right: '-32%' }, // House 9 - Sign 10
      10: { bottom: '33%', right: '18%' }, // House 10 - Sign 11
      11: { bottom: '83%', right: '18%' }, // House 11 - Sign 12
      12: { bottom: '82%', right: '31%' }  // House 12 - Sign 1
    };
    return signPositions[houseNo] || {};
  };

  return (
    <div style={{ paddingLeft: '10px' }}>

      <div className='grid'>
        {/* Diagonal Lines */}
        <div className='north-diagonal-line-1'></div>
        <div className='north-diagonal-line-2'></div>

        {/* Diamond */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '70.7%',
          height: '70.7%',
          border: '3px solid black',
          transform: 'translate(-50%, -50%) rotate(45deg)',
          boxSizing: 'border-box'
        }}>
          {/* Render all houses with their signs and planets */}
          {Array.from({ length: 12 }, (_, i) => {
            const houseNo = i + 1;
            const houseData = getHouseData(houseNo);
            const position = housePositionMap[houseNo];
            
            // Inner house handling
            if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(houseNo)) {
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
                    fontSize: '11px',
                    ...getPositionStyles(position)
                  }}
                >
                  <div style={{
                    transform: 'rotate(-45deg)',
                    display: 'inline-block'
                  }}>
                    {houseData && formatPlanets(houseData.Planets, houseNo)}
                  </div>
                </div>
              );
            }
            return null;
          })}

          {/* Label Container for Signs and Other Houses */}
          <div>
            {/* Render signs for all houses */}
            {Array.from({ length: 12 }, (_, i) => {
              const houseNo = i + 1;
              const houseData = getHouseData(houseNo);
              
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
                    fontSize: '12px',
                    userSelect: 'none',
                    pointerEvents: 'none',
                    transform: 'rotate(-45deg)',
                    color: 'red',
                    ...getSignPositionStyles(houseNo)
                  }}
                >
                  {houseData ? houseData.SignNo.toString().padStart(2, '0') : ''}
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
};

export default NorthChart;