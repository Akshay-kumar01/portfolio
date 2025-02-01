import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    { 
      title: "Solidity-based Ethereum Banking Website", 
      description: [
        "A Solidity-based Ethereum Banking website with the functionality of:",
        "- Creation of user accounts",
        "- Viewing account balance",
        "- Transactions through ethers",
        "",
        "Features:",
        "- Implemented 4 basic database operations (CRUD) for account management",
        "- Money transfer through ethers",
        "",
        "Tech Stack: React JS, Metamask, Node JS, HTML, CSS, Solidity, Truffle, Ganache"
      ],
      link: "https://github.com/Akshay-kumar01/Ethereum" // Updated link
    },
    { 
      title: "E-Commerce Website", 
      description: [
        "An e-commerce website that enables product browsing, shopping cart functionality, and payment integration.",
        "Under Development",
        "TechStacks: HTML, CSS, Java Springboot, Maven"
      ],
      link: "https://github.com/Akshay-kumar01/E-Commerce-Website.git" // Updated link
    },
    { 
      title: "Project Two", 
      description: ["A portfolio site with animations."],
      link: "https://yourportfolio.com" // Replace with your actual project link
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3 className="project-title">{project.title}</h3>
            <ul>
              {project.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            {project.link && (
              <button 
                className="project-button"
                onClick={() => window.open(project.link, "_blank")}
              >
                View Project
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
