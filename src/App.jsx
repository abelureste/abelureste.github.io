import React from 'react';
import Home from '../components/Home';
import PersonalIntroduction from '../components/PersonalIntroduction';
import Projects from '../components/Projects';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


import PiFrameProject from '../components/PiFrameProject';
import HomelabProject from '../components/HomelabProject';
import PersonalWebsiteProject from '../components/PersonalWebsiteProject';
import BarWebsiteProject from '../components/BarWebsiteProject';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/personal-introduction" element={<PersonalIntroduction />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/pi-frame" element={<PiFrameProject />} />
        <Route path="/projects/homelab" element={<HomelabProject />} />
        <Route path="/projects/personal-website" element={<PersonalWebsiteProject />} />
        <Route path="/projects/bar-website" element={<BarWebsiteProject />} />
      </Routes>
    </AnimatePresence>
  );
};


function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;