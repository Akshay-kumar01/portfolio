import React from "react";
import "./Achievements.css";
// import hacktoberfestBadge from "../public/hacktoberfest-badge.png"; // Path to your badge image
// import gwocBadge from "../public/gwoc-badge.png"; // Path to your badge image
// import ethereumCertificate from "../public/ethereum-certificate.pdf"; // Path to your certificate

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <h2>Achievements</h2>
      <ul className="achievement-list">
        <li className="achievement-item">
          Hacktoberfest’21 Contributor. (Submitted a total of 6 PRs, out of which all got accepted.)
          {/* <img className="achievement-badge" src="/hacktoberfest-badge.jpeg" alt="Hacktoberfest Badge" /> */}
        </li>
        <li className="achievement-item">
          Girlscript Winter Of Code (GWOC’21) Contributor.
          <br />
          <a href="/GWOC-badge.jpeg" target="_blank" rel="noopener noreferrer" className="certificate-link">
            View Badge
          </a>
          {/* <img className="achievement-badge" src="/GWOC-badge.jpeg" alt="GWOC Badge" /> */}
        </li>
        <li className="achievement-item">
          Achieved Second runner-up in Ideathon’21 organized by MNTC, NIT Durgapur.
          <br />
          Created and presented the idea of a social platform (Tranquila) to support mental health.
        </li>
        <li className="achievement-item">
          Achieved First position in Ethereum project in Ten Days of Code organized by the GNU/Linux Users’ Group, NIT Durgapur.
          <br />
          Engineered a rapid system with user registration, 24-hour loan approvals, balance retrieval, ether transfers, and strong CRUD capabilities.
          <br />
          <a href="/Ethereum.jpg" target="_blank" rel="noopener noreferrer" className="certificate-link">
            View Certificate
          </a>
          {/* <img className="etereum-badge" src="/Ethereum.jpg" alt="GWOC Badge" /> */}
        </li>
        <li className="achievement-item">
          Achieved the Letter Of Recommendation (LOR) as an intern (Graphic Designer) at the Pinkishe Foundation.
          <br />
          {/* <a href="/pinkishe-lor.pdf" target="_blank" rel="noopener noreferrer" className="certificate-link">
            View LOR Certificate
          </a> */}
        </li>
        <li className="achievement-item">
          Solved a total of 400+ questions on online coding platforms – Leetcode and Codechef.
          <br />
          <a href="https://leetcode.com/your-profile" target="_blank" rel="noopener noreferrer" className="achievement-link">
            Leetcode Profile
          </a>
          <span> | </span>
          <a href="https://www.codechef.com/users/your-profile" target="_blank" rel="noopener noreferrer" className="achievement-link">
            Codechef Profile
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Achievements;
