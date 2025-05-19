import React from "react";
import "./App.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">MyPortfolio</div>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
