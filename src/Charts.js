import React, { useState } from 'react';
import './Charts.css';
import NorthChart from './Charts/NorthChart';
import SouthChart from './Charts/SouthChart';
import EastChart from './Charts/EastChart';
import DivisionForm from './Form/DivisionForm';
import ChartContextMenu from './Form/ChartsContextMenuForm';

const Charts = () => {
  const [currentChart, setCurrentChart] = useState('North');
  const [showDivisionForm, setShowDivisionForm] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState('d1');
  const [showChartMenu, setShowChartMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleChartContextMenu = (e) => {
    e.preventDefault();
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setShowChartMenu(true);
  };

  const renderChart = () => {
    switch (currentChart) {
      case 'North':
        return <NorthChart />;
      case 'South':
        return <SouthChart />;
      case 'East':
        return <EastChart />;
      default:
        return <NorthChart />;
    }
  };

  return (
    <div>
      <div className="chart-selector-row" style={{
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
        style={{ display: 'inline-block', position: 'relative' }}
      >
        {renderChart()}
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
  );
};

export default Charts;