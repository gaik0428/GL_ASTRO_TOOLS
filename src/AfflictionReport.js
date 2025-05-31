import React, { useState } from 'react';
import Navbar from "./Header/Navbar";
import Charts from "./Charts";
import './Affliction-Report.css';
import GraphChart from './Charts/GraphChart';
import Footer from "./Footer/Footer";
import AfflictionPlanetTable from './Charts/AfflictionPlanetTable';
import HouseTable from './Charts/HouseTable';
import VargaTable from './Charts/VargaTable';
import LifeAreaSection from './Charts/LifeAreaSection';
import RemedyTable from './Charts/RemedyTable';

function AfflictionReport() {
    const tabs = ['Graph', 'Planet', 'House', '10 Varga', 'Life Area', 'Remedy'];
    const [activeTab, setActiveTab] = useState('Graph');
    return (
        <div>
            <Navbar />
            <div className="home-container">
                {/* LEFT COLUMN: Tabs + Charts */}
                <div className="left-panel">
                    <div className="affliction-report-tabs-container">
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
                    {/* Show RemedyTable only if Remedy tab is active, else show Charts */}
                    {activeTab === 'Remedy' ? (
                        <RemedyTable />
                    ) : (
                        <Charts />
                    )}
                </div>
                {/* RIGHT COLUMN: Tab Content */}
                <div className="tab-content">
                    {activeTab === 'Graph' && <div style={{ paddingLeft: '100px' }}>
                        <GraphChart />
                    </div>}
                    {activeTab === 'Planet' && (
                        <div style={{ paddingLeft: '120px' }}>
                            <AfflictionPlanetTable />
                        </div>
                    )}
                    {activeTab === 'House' && (
                        <div style={{ paddingLeft: '120px' }}>
                            <HouseTable />
                        </div>
                    )}
                    {activeTab === '10 Varga' && (
                        <div style={{ paddingLeft: '120px' }}>
                            <VargaTable />
                        </div>
                    )}
                    {activeTab === 'Life Area' && (
                        <div style={{ paddingLeft: '120px' }}>
                            <LifeAreaSection />
                        </div>
                    )}
                    {activeTab === 'Dasha' && <div style={{ paddingLeft: '150px' }}>
                    </div>}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AfflictionReport;