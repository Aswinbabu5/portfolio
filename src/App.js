import React from 'react'
import Header from './components/Header/Header';
import BodyContainer from './components/BodyContainer/BodyContainer';
import SkillContent from './components/SkillContent/SkillContent';
import ProjectContent from './components/ProjectContent/ProjectContent';
import ExperContent from './components/ExperienceContent/ExperContent';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Header />
      <BodyContainer />
      <SkillContent />
      <ProjectContent />
      <ExperContent />
      <Contact />
    </div>
  );
}

export default App;
