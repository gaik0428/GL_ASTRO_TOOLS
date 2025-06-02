import React, { useState } from 'react';
import NorthChartIcon from './Charts/ChartsWithIcon/NorthChartIcon';
import SouthChartIcon from './Charts/ChartsWithIcon/SouthChartIcon';
import EastChartIcon from './Charts/ChartsWithIcon/EastChartIcon';
import DivisionForm from './Form/DivisionForm';
import ChartContextMenu from './Form/ChartsContextMenuForm';
import './AreaSection.css';

const AreaSection = () => {
  const [currentChart, setCurrentChart] = useState('North');
  const [showDivisionForm, setShowDivisionForm] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState('d1');
  const [showChartMenu, setShowChartMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [lifeArea, setLifeArea] = useState('Profession');
  const [subQuestion, setSubQuestion] = useState('Will I Get Job ?');

  const handleChartContextMenu = (e) => {
    e.preventDefault();
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setShowChartMenu(true);
  };

  const renderChart = () => {
    switch (currentChart) {
      case 'North':
        return <NorthChartIcon />;
      case 'South':
        return <SouthChartIcon />;
      case 'East':
        return <EastChartIcon />;
      default:
        return <NorthChartIcon />;
    }
  };

  return (
    <div className="area-section-root" style={{ display: 'flex', alignItems: 'flex-start', gap: 40, marginTop: -7, marginBottom: 80 }}>
      {/* Left: Chart and controls */}
      <div>
        <div className="area-section-controls" style={{ display: 'flex', alignItems: 'flex-end', marginBottom: 12, marginLeft: 50 }}>
          <div>
            <div style={{ fontWeight: 'bold', color: '#444', fontSize: 18, marginBottom: 2 }}>Question Life Area</div>
            <select
              value={lifeArea}
              onChange={e => setLifeArea(e.target.value)}
              style={{
                fontWeight: 'bold',
                fontSize: 24,
                background: '#003366',
                color: 'white',
                border: 'none',
                padding: '8px 80px',
                marginBottom: 4,
                marginRight: 3,
                minWidth: 180
              }}
            >
              <option value="Profession">Profession</option>
              <option value="Marriage">Marriage</option>
              <option value="Wealth">Wealth</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div style={{ marginLeft: 180 }}>
            <div style={{ fontWeight: 'bold', color: '#444', fontSize: 18, marginBottom: 2 }}>Sub-Question</div>
            <select
              value={subQuestion}
              onChange={e => setSubQuestion(e.target.value)}
              style={{
                fontWeight: 'bold',
                fontSize: 24,
                background: '#00339a',
                color: 'white',
                border: 'none',
                padding: '8px 40px',
                marginBottom: 4,
                minWidth: 220
              }}
            >
              <option value="Will I Get Job ?">Will I Get Job ?</option>
              <option value="Will I Get Promotion ?">Will I Get Promotion ?</option>
              <option value="Will I Get Married ?">Will I Get Married ?</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        <div className="area-section-chart-switcher" style={{
          display: 'flex',
          width: '400px',
          marginBottom: '10px',
          justifyContent: 'center',
          marginLeft: '30px',
        }}>
          <div style={{
            padding: '8px 16px',
            marginRight: '4px',
            textAlign: 'center',
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: '#0c6384',
            color: 'white',
            borderRadius: '20px'
          }}
            onClick={() => setShowDivisionForm(true)}
          >D-1</div>
          <div
            style={{
              padding: '8px 16px',
              marginRight: '4px',
              textAlign: 'center',
              cursor: 'pointer',
              fontWeight: 'bold',
              backgroundColor: currentChart === 'North' ? '#7b2cbf' : 'transparent',
              color: currentChart === 'North' ? 'white' : '#7b2cbf',
              borderRadius: '5px'
            }}
            onClick={() => setCurrentChart('North')}
          >North</div>
          <div
            style={{
              padding: '8px 16px',
              marginRight: '4px',
              textAlign: 'center',
              cursor: 'pointer',
              fontWeight: 'bold',
              backgroundColor: currentChart === 'South' ? '#7b2cbf' : 'transparent',
              color: currentChart === 'South' ? 'white' : '#7b2cbf',
              borderRadius: '5px'
            }}
            onClick={() => setCurrentChart('South')}
          >South</div>
          <div
            style={{
              padding: '8px 16px',
              marginRight: '4px',
              textAlign: 'center',
              cursor: 'pointer',
              fontWeight: 'bold',
              backgroundColor: currentChart === 'East' ? '#7b2cbf' : 'transparent',
              color: currentChart === 'East' ? 'white' : '#7b2cbf',
              borderRadius: '5px'
            }}
            onClick={() => setCurrentChart('East')}
          >East</div>
        </div>
        {showDivisionForm && (
          <DivisionForm
            selected={selectedDivision}
            onSelect={key => setSelectedDivision(key)}
            onClose={() => setShowDivisionForm(false)}
            onHigherDivisions={() => alert('Show higher divisions')}
          />
        )}
        <div
          onContextMenu={handleChartContextMenu}
          className="area-section-chart-scroll"
          style={{
            display: 'inline-block',
            position: 'relative',
            width: 500,
            height: 500,
            maxWidth: '97vw',
            maxHeight: '100vw',
            overflowX: 'auto',
            overflowY: 'auto',
            whiteSpace: 'nowrap'
          }}
        >
          <div style={{ width: 500, height: 500, display: 'inline-block' }}>
            {renderChart()}
          </div>
          {/* Chart context menu */}
          {showChartMenu && (
            <ChartContextMenu
              x={menuPosition.x}
              y={menuPosition.y}
              onClose={() => setShowChartMenu(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AreaSection;