import React from 'react';
import './EastChart.css'

const EastChart = () => {
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
        <div style = {{ fontSize: '16px', fontWeight: '700' }}>
            <span>
                {planets[0].Symbol}
                <span className="degree-blue">{planets[0].Degree}°</span>
            </span>
        </div>
      );
    }
    
    if (planets.length === 2) {
      return (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1px', 
          alignItems: 'center', 
          fontSize: '16px', 
          fontWeight: '700' 
        }}>
          {planets.map((planet, idx) => (
            <span key={idx}>
              {planet.Symbol}
              <span className="degree-blue">{planet.Degree}°</span>
            </span>
          ))}
        </div>
      );
    }
    
    if (planets.length === 3) {
      return (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '1px'
        }}>
          <div style={{ display: 'flex', gap: '2px', justifyContent: 'center', fontSize: '16px', fontWeight: '700' }}>
            <span>
              {planets[0].Symbol}
              <span className="degree-blue">{planets[0].Degree}°</span>
            </span>
            <span>
              {planets[1].Symbol}
              <span className="degree-blue">{planets[1].Degree}°</span>
            </span>
          </div>
          <div style = {{ fontSize: '16px', fontWeight: 700 }}>
            <span>
                {planets[2].Symbol}
                <span className="degree-blue">{planets[2].Degree}°</span>
            </span>
          </div>
        </div>
      );
    }
    
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1px',
        justifyItems: 'center'
      }}>
        {planets.slice(0, 4).map((planet, idx) => (
          <span key={idx} style={{ fontWeight: 700, fontSize: '16px' }}>
            {planet.Symbol}
            <span className="degree-blue">{planet.Degree}°</span>
          </span>
        ))}
      </div>
    );
  };

  const renderHouseContent = (houseNo) => {
    const houseData = getHouseData(houseNo);

    // Custom position tweaks for house value (SignNo) and planet data
    let signStyle = { fontSize: '16px', fontWeight: 'bold', color: 'red', position: 'relative' };
    let planetStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', position: 'relative' };

    if (houseNo === 2 || houseNo === 11) {
      signStyle = { ...signStyle, left: '-50%' };
      planetStyle = { ...planetStyle, left: '-50%' };
    }
    if (houseNo === 1 || houseNo === 10) {
      signStyle = { ...signStyle, left: '50%' };
      planetStyle = { ...planetStyle, left: '50%' };
    }
    if (houseNo === 4 || houseNo === 8) {
      signStyle = { ...signStyle, top: '-30px' };
      planetStyle = { ...planetStyle, top: '-30px' };
    }
    if (houseNo === 5 || houseNo === 7) {
      signStyle = { ...signStyle, top: '30px' };
      planetStyle = { ...planetStyle, top: '30px' };
    }
    if (houseNo === 3 || houseNo === 6 || houseNo === 9 || houseNo === 12) {
      signStyle = { ...signStyle, top: '30px' };
      planetStyle = { ...planetStyle, top: '30px' };
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', height: '100%', width: '100%' }}>
        <div style={signStyle}>
          {houseData ? houseData.SignNo.toString().padStart(2, '0') : ''}
        </div>
        {houseData && (
          <div style={planetStyle}>
            {formatPlanets(houseData.Planets, houseNo)}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ paddingLeft: '10px' }}>

      {/* East Indian Chart - 3x3 Grid */}
      <div className="east-chart">
        {/* Top-left corner - split diagonally (Houses 3 and 2) */}
        <div style={{
          position: 'relative',
          backgroundColor: 'white',
          border: '2px solid black',
        }}>
          {/* Diagonal line */}
          <div style={{
            position: 'absolute',
            width: '148%',
            backgroundColor: 'black',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            transformOrigin: 'center',
            height: '4px',
          }}></div>
          
          {/* House 3 (top triangle) */}
          <div style={{
            position: 'absolute',
            top: '5px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(1)}
          </div>
          
          {/* House 2 (bottom triangle) */}
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '60%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(2)}
          </div>
        </div>

        {/* Top center - House 1 */}
        <div style={{
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid black',
        }}>
          {renderHouseContent(12)}
        </div>

        {/* Top-right corner - split diagonally (Houses 12 and 11) */}
        <div style={{
          position: 'relative',
          backgroundColor: 'white',
          border: '2px solid black',
        }}>
          {/* Diagonal line */}
          <div style={{
            position: 'absolute',
            width: '148%',
            backgroundColor: 'black',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-45deg)',
            transformOrigin: 'center',
            height: '4px',
          }}></div>
          
          {/* House 12 (top triangle) */}
          <div style={{
            position: 'absolute',
            top: '5px',
            left: '55%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(11)}
          </div>
          
          {/* House 11 (bottom triangle) */}
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(10)}
          </div>
        </div>

        {/* Middle left - House 4 */}
        <div style={{
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid black',
        }}>
          {renderHouseContent(3)}
        </div>

        {/* Center - Empty */}
        <div style={{
          backgroundColor: '#f8f9fa',
          border: '2px solid black',
        }}></div>

        {/* Middle right - House 10 */}
        <div style={{
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid black',
        }}>
          {renderHouseContent(9)}
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
            width: '148%',
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
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(4)}
          </div>
          
          {/* House 6 (right triangle) */}
          <div style={{
            position: 'absolute',
            top: '50%',
            right: '5px',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(5)}
          </div>
        </div>

        {/* Bottom center - House 7 */}
        <div style={{
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid black',
        }}>
          {renderHouseContent(6)}
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
            width: '148%',
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
            top: '50%',
            left: '5px',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(7)}
          </div>
          
          {/* House 9 (right triangle) */}
          <div style={{
            position: 'absolute',
            top: '50%',
            right: '5px',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(8)}
          </div>
        </div>
      </div>

      <style jsx>{`
        .degree-blue {
          vertical-align: super;
          font-size: 0.7em;
          margin-left: 1px;
          font-weight: bold;
          color: rgb(12, 100, 92);
        }
      `}</style>
    </div>
  );
};

export default EastChart;