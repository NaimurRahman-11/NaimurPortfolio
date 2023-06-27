import { useRef } from "react";
import About from "./components/About/About"
import Intro from "./components/Intro/Intro"
import Navbar from "./components/Navbar/Navbar"
import Qualifications from "./components/Qualifications/Qualifications";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";


function App() {
 
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleEducationClick = () => {
    educationRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSkillsClick = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleHomeClick = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="">
      <Navbar handleAboutClick={handleAboutClick} handleEducationClick={handleEducationClick} handleSkillsClick={handleSkillsClick} handleHomeClick={handleHomeClick} handleProjectsClick={handleProjectsClick}></Navbar>
        <Intro homeRef={homeRef}></Intro>
        <About aboutRef={aboutRef}></About>
        <Qualifications educationRef={educationRef}></Qualifications>
        <Skills skillsRef={skillsRef}></Skills>
        <Projects projectsRef={projectsRef}></Projects>
     </div>
    </>
  )
}

export default App
