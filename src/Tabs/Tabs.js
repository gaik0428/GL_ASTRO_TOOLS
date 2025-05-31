import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tabs.css';

const Tabs = () => {
  const tabs = ['Basic', 'Strength', 'Vargas', 'Dasha'];
  const [activeTab, setActiveTab] = useState('Basic');

  return (
    <div>
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === 'Basic' && <div>{/* Basic content */}</div>}
        {activeTab === 'Strength' && (
          <div>
            <h2>Shadbala</h2>
            {/* Strengths content */}
          </div>
        )}
        {activeTab === 'Vargas' && <div>{/* Vargas content */}</div>}
        {activeTab === 'Dasha' && <div>{/* Dasha content */}</div>}
      </div>
    </div>
  );
};

export default Tabs;
