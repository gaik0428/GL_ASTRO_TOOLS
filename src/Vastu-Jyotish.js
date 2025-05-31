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

function VastuJyotish () {
    const tabs = ['Basic', 'Graph', 'Life Area', 'Vastu'];
    const [activeTab, setActiveTab] = useState('Basic');
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
                    {activeTab === 'Basic' && <div style={{ paddingLeft: '150px' }}>
                        <VastuBasicTable />
                    </div>}
                    {activeTab === 'Graph' && (
                        <div style={{ paddingLeft: '120px' }}>
                            <GraphChart />
                        </div>
                    )}
                    {activeTab === 'Life Area' && (
                    <div className="vargas-grid">
                        <LifeAreaSection />
                    </div>
                    )}
                    {activeTab === 'Vastu' && <div style={{ paddingLeft: '150px' }}>
                        <VastuSection />
                    </div>}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default VastuJyotish;