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
import VastuBasicTable from './Charts/VastuBasicTable.js';
import GraphChart from './Charts/GraphChart.js';
import LifeAreaSection from './Charts/LifeAreaSection.js';
import VastuSection from './Charts/VastuSection.js';
import ArudhaSection from './ArudhaSection.js';
import AreaSection from './AreaSection.js';
import TimingSection from './TimingSection.js';

function Prashna () {
    const tabs = ['Arudha', 'Area', 'Varga', 'Timing'];
    const [activeTab, setActiveTab] = useState('Arudha');
    return (
        <div>
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
                    {activeTab === 'Arudha' && <div style={{ paddingLeft: '150px' }}>
                        <ArudhaSection />
                    </div>}
                    {activeTab === 'Area' && (
                        <div style={{ paddingLeft: '220px' }}>
                            <AreaSection />
                        </div>
                    )}
                    {activeTab === 'Varga' && (
                        <div className="vargas-grid">
                            {Array.from({ length: 8 }).map((_, index) => (
                            <VergasChart key={index} />
                            ))}
                        </div>
                    )}
                    {activeTab === 'Timing' && <div style={{ paddingLeft: '150px' }}>
                        <TimingSection />
                    </div>}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Prashna;