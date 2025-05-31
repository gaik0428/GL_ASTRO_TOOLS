import React, { useState } from 'react';
import Navbar from "./Header/Navbar";
import Charts from "./Charts";
import './Home.css';
import AstroDataContainer from "./Charts/AstroDataContainer";
import PlanetsTable from "./Charts/PlanetTable";
import StrengthChart from './Charts/StrengthChart.js';
import StrengthTable from './Charts/StrengthTable.js';
import VergasChart from './Charts/VergasChart.js';
import DashaInfo from './Charts/DashaInfo.js';
import Footer from "./Footer/Footer";

function Home() {
    const tabs = ['Basic', 'Strength', 'Vargas', 'Dasha'];
    const [activeTab, setActiveTab] = useState('Basic');
    return (
        <div className="home-root">
            <Navbar />
            <div className="home-container">
                {/* LEFT COLUMN: Tabs + Charts */}
                <div className="left-panel">
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
                    <Charts />
                </div>
                {/* RIGHT COLUMN: Tab Content */}
                <div className="tab-content">
                    {activeTab === 'Basic' && 
                    <div className="tab-inner-content">
                        <AstroDataContainer />
                        <PlanetsTable />
                    </div>}
                    {activeTab === 'Strength' && (
                        <div className="tab-inner-content">
                        <StrengthChart />
                        <StrengthTable />
                        </div>
                    )}
                    {activeTab === 'Vargas' && (
                        <div className="vargas-grid">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <VergasChart key={index} />
                        ))}
                        </div>
                    )}
                    {activeTab === 'Dasha' && <div style={{ paddingLeft: '250px' }}>
                        <div className="tab-inner-content">
                        <DashaInfo />
                        </div>
                    </div>}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;