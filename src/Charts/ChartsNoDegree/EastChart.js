import React from 'react';

const EastChart = () => {
  // Same chart data as the North chart
  // JSON data that show all houses having 4 planets 
  // const planetSymbols = ['Su', 'Mo', 'Me', 'Ve', 'Ma', 'Ju', 'Sa', 'Ra', 'Ke', 'As', 'Ur', 'Ne', 'Pl'];
  // const chartData = Array.from({ length: 12 }, (_, i) => ({
  //   HouseNo: i + 1,
  //   SignNo: ((i + 1) % 12) + 1,
  //   Planets: Array.from({ length: 4 }, (_, j) => ({
  //     Symbol: planetSymbols[(i + j) % planetSymbols.length],
  //     Degree: (i * 10 + j * 5) % 30,
  //     Minute: 0,
  //     Second: 0
  //   }))
  // }));
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
        <div style = {{ fontSize: '11px', fontWeight: '700' }}>
            <span>
                {planets[0].Symbol}
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
          fontSize: '11px', 
          fontWeight: '700' 
        }}>
          {planets.map((planet, idx) => (
            <span key={idx}>
              {planet.Symbol}
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
          <div style={{ display: 'flex', gap: '2px', justifyContent: 'center', fontSize: '11px', fontWeight: '700' }}>
            <span>
              {planets[0].Symbol}
            </span>
            <span>
              {planets[1].Symbol}
            </span>
          </div>
          <div style = {{ fontSize: '11px', fontWeight: 700 }}>
            <span>
                {planets[2].Symbol}
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
          <span key={idx} style={{ fontWeight: 700, fontSize: '12px' }}>
            {planet.Symbol}
          </span>
        ))}
      </div>
    );
  };

  const renderHouseContent = (houseNo) => {
    const houseData = getHouseData(houseNo);

    // Custom position tweaks for house value (SignNo) and planet data
    let signStyle = { fontSize: '12px', fontWeight: 'bold', color: 'red', position: 'relative' };
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
      signStyle = { ...signStyle, top: '15px' };
      planetStyle = { ...planetStyle, top: '15px' };
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 89px)',
        gridTemplateRows: 'repeat(3, 89px)',
        border: '3px solid black',
        backgroundColor: 'black',
        gap: '2px',
        width: '271px',
      }}>
        {/* Top-left corner - split diagonally (Houses 3 and 2) */}
        <div style={{
          position: 'relative',
          backgroundColor: 'white',
          border: '2px solid black',
        }}>
          {/* Diagonal line */}
          <div style={{
            position: 'absolute',
            width: '120px',
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
            top: '-1px',
            left: '55%',
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
            bottom: '0',
            left: '45%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(2)}
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
            width: '120px',
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
            top: '-1px',
            left: '40%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(11)}
          </div>
          
          {/* House 10 (bottom triangle) */}
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '60%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(10)}
          </div>
        </div>

        {/* Middle left - House 3 */}
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

        {/* Middle right - House 9 */}
        <div style={{
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid black',
        }}>
          {renderHouseContent(9)}
        </div>

        {/* Bottom-left corner - split diagonally (Houses 4 and 5) */}
        <div style={{
          position: 'relative',
          backgroundColor: 'white',
          border: '2px solid black',
        }}>
          {/* Diagonal line */}
          <div style={{
            position: 'absolute',
            width: '120px',
            backgroundColor: 'black',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-45deg)',
            transformOrigin: 'center',
            height: '4px',
          }}></div>
          
          {/* House 4 (left triangle) */}
          <div style={{
            position: 'absolute',
            top: '70%',
            left: '5%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(4)}
          </div>
          
          {/* House 5 (right triangle) */}
          <div style={{
            position: 'absolute',
            top: '30%',
            right: '5%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(5)}
          </div>
        </div>

        {/* Bottom center - House 6 */}
        <div style={{
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid black',
        }}>
          {renderHouseContent(6)}
        </div>

        {/* Bottom-right corner - split diagonally (Houses 7 and 8) */}
        <div style={{
          position: 'relative',
          backgroundColor: 'white',
          border: '2px solid black',
        }}>
          {/* Diagonal line */}
          <div style={{
            position: 'absolute',
            width: '120px',
            backgroundColor: 'black',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            transformOrigin: 'center',
            height: '4px',
            
          }}></div>
          
          {/* House 7 (left triangle) */}
          <div style={{
            position: 'absolute',
            top: '30%',
            left: '5%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(7)}
          </div>
          
          {/* House 8 (right triangle) */}
          <div style={{
            position: 'absolute',
            top: '70%',
            right: '5%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {renderHouseContent(8)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EastChart;