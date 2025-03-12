/* eslint-disable no-unused-expressions */
import React from "react";
import Navbar from "./Component/Navbar";
import "./index.css"
import About from "./Component/TopContainer/About";
import TopContent from "./Component/TopContainer/TopContent";
import Skills from "./Component/SkillContainer/Skills";
import ProjectContainer from "./Component/ProjectContainer/ProjectContainer";
import Exprerience from "./Component/Experience/Exprerience";
import Contact from "./Component/Contact/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <ProjectContainer />
      <Exprerience />
      <Contact />
    </div>
  );
}

export default App;
