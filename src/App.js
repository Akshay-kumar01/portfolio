import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "./App.css";
import WorkExperience from "./WorkExperience";
import Achievements from "./Achievements";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <WorkExperience />
      <Achievements />
      <Contact />
      <Hero />
    </div>
  );
}

export default App;
