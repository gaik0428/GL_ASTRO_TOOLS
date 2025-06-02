import React, { useState } from 'react';
import Navbar from "./Header/Navbar";
import Charts from "./Charts";
import './Home.css';
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
                    {activeTab === 'Basic' && <div className='tab-inner-content-1'>
                        <VastuBasicTable />
                    </div>}
                    {activeTab === 'Graph' && (
                        <div className='graph-chart-container'>
                            <GraphChart />
                        </div>
                    )}
                    {activeTab === 'Life Area' && (
                    <div className='life-area-section-container'>
                        <LifeAreaSection />
                    </div>
                    )}
                    {activeTab === 'Vastu' && <div className='vastu-section-container'>
                        <VastuSection />
                    </div>}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default VastuJyotish;