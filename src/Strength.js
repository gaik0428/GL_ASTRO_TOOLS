import React, { useState } from "react";
import Navbar from "./Header/Navbar";
import Charts from "./Charts";
import './Home.css';
import PlanetsTable from "./Charts/PlanetTable";
import Tabs from "./Tabs/Tabs";
import Footer from "./Footer/Footer";

function Strength() {
  // Pass "Strength" as the initialActiveTab prop to Tabs
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div>
          <Tabs initialActiveTab="Strength" />
          <Charts />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Strength;