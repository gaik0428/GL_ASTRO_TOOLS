import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Home from './Home';
import AfflictionReport from './AfflictionReport';
import VastuJyotish from './Vastu-Jyotish';
import Prashna from './Prashna';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Welcome />} />
        <Route path="/" element={<Home />} />
        <Route path="/affliction-report" element={<AfflictionReport />} />
        <Route path="/vastu-jyotish" element={<VastuJyotish />} />
        <Route path="/prashna" element={<Prashna />} />
      </Routes>
    </Router>
  );
}

export default App;
