import React from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import WorkExperience from "./WorkExperience";
import Achievements from "./Achievements";
import BlinkingLights from "./BlinkingLights"; // 🔹 Import blinking lights
import "./App.css";

function App() {
  return (
    <div className="App">
      <BlinkingLights /> {/* 🔹 Add lights to background */}
      <Header />
      <About />
      <Projects />
      <WorkExperience />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
