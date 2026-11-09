import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import BodyContainer from './components/BodyContainer/BodyContainer';
import SkillContent from './components/SkillContent/SkillContent';
import ProjectContent from './components/ProjectContent/ProjectContent';
import ExperContent from './components/ExperienceContent/ExperContent';
import Contact from './components/Contact/Contact';
import DynamicBackground from './components/Background/DynamicBackground';
import { animateScroll as scroll } from 'react-scroll';
import './App.css';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div className="portfolio-app-root">
      {/* Interactive dynamic canvas & ambient glowing background */}
      <DynamicBackground />

      {/* Floating navigation header */}
      <Header />

      {/* Main sections */}
      <main className="portfolio-main-content">
        <BodyContainer />
        <SkillContent />
        <ProjectContent />
        <ExperContent />
        <Contact />
      </main>

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button 
          className="floating-scroll-top-btn"
          onClick={() => scroll.scrollToTop({ duration: 500, smooth: 'easeInOutCubic' })}
          aria-label="Scroll to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
