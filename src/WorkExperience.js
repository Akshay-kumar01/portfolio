import React from "react";
import "./WorkExperience.css";

function WorkExperience() {
  const experiences = [
    {
      type: "FULL-TIME",
      company: "Tredence Analytics Solutions Pvt Ltd",
      role: "Data Engineer",
      duration: "June 2024 - Present",
      description: [
        "Engineered and automated ELT pipelines and dashboards for clients, enhancing data integration and processing efficiency to drive informed business decisions."
      ],
    },
    {
      type: "INTERNSHIPS",
      company: "Leap Intern @ ITC Ltd.",
      role: "SFC Reduction",
      duration: "May - July 2023",
      description: [
        "Spearheaded the implementation of DMAIC methodology, utilizing statistical analysis and data management techniques to identify and eliminate bottlenecks in the manufacturing process.",
        "Achieved a 40% decrease in Specific Fuel Consumption and identified seven total nodes in the existing system."
      ],
      certificateLink: "/Akshay Kumar Singh Completion Certificate ITC.pdf" // Link to the PDF in the public folder
    },
    {
      type: "INTERNSHIPS",
      company: "Pinkishe Foundation",
      role: "Graphic Designer Head and Intern",
      duration: "July - August 2021",
      description: [
        "Formulated captivating, engaging, impactful graphics for the organisation's social media posts.",
        "Supervised and directed the efforts of fellow graphic designers as a team lead of 20 members."
      ],
      certificateLink: "/Akshay_Kumar_SIngh_Pinkishe.png", // Certificate link for Pinkishe Foundation
      lorCertificateLink: "/LOR Akshay Kumar Singh.png" // Link to the LOR PDF
    }
  ];

  return (
    <section id="work-experience" className="work-experience">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience">
            <h3 className="company">
              {exp.company} <span className="role">({exp.role})</span>
            </h3>
            <p className="duration">{exp.duration}</p>
            <ul>
              {exp.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            {exp.certificateLink && (
              <a
                href={exp.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate
              </a>
            )}
            {exp.lorCertificateLink && (
              <a
                href={exp.lorCertificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                LOR Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
