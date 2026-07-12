import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import TaxServices from './components/TaxServices';
import RealEstateServices from './components/RealEstateServices';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';

// Scroll To Top on Route Change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Sub-component to access location context for page fade-in transitions
function AppContent() {
  const location = useLocation();

  return (
    <div className="app-layout">
      {/* Sticky Header with logo and contacts */}
      <Header />
      
      {/* Main Routed Content - Remounts and runs fade-in keyframes on path changes */}
      <main className="main-content animate-fade-in" key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tax-services" element={<TaxServices />} />
          <Route path="/real-estate" element={<RealEstateServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      {/* Footer with map and financial disclaimer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
      
      <style>{`
        .app-layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .main-content {
          flex-grow: 1;
        }
      `}</style>
    </Router>
  );
}

export default App;
