import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import "./Hero.css";

// Particle network component
function ParticleNetwork() {
  const particlesRef = useRef();
  const linesRef = useRef();

  // Generate particles and lines data
  const { particlePositions, lineVertices } = useMemo(() => {
    const numParticles = 150;
    const positions = new Float32Array(numParticles * 3);
    const vertices = [];

    for (let i = 0; i < numParticles; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50; // z
    }

    for (let i = 0; i < numParticles; i++) {
      for (let j = i + 1; j < numParticles; j++) {
        const distance = Math.sqrt(
          Math.pow(positions[i * 3] - positions[j * 3], 2) +
            Math.pow(positions[i * 3 + 1] - positions[j * 3 + 1], 2) +
            Math.pow(positions[i * 3 + 2] - positions[j * 3 + 2], 2)
        );

        if (distance < 10) {
          vertices.push(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2]
          );
        }
      }
    }

    return { particlePositions: positions, lineVertices: new Float32Array(vertices) };
  }, []);

  // Animation loop
  useFrame(() => {
    const positions = particlesRef.current.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] += (Math.random() - 0.5) * 0.1;
      positions[i + 1] += (Math.random() - 0.5) * 0.1;
      positions[i + 2] += (Math.random() - 0.5) * 0.1;
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      {/* Particles */}
      <Points ref={particlesRef} positions={particlePositions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.2}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>

      {/* Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={lineVertices.length / 3}
            array={lineVertices}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="silver" transparent opacity={0.4} />
      </lineSegments>
    </>
  );
}

// Hero Section Component
function Hero() {
  return (
    <div className="main-container">
      {/* Canvas for Particle Network in the background */}
      <Canvas className="particle-canvas">
        <ambientLight />
        <ParticleNetwork />
      </Canvas>

      {/* Hero Section
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>I am a developer passionate about building creative solutions.</p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            View My Resume
          </a>
        </div>
      </div> */}

      {/* Other Sections
      <div className="other-sections">
        <section className="about">
          <h2>About Me</h2>
          <p>Hello! I'm a software engineer with a knack for designing and developing efficient and innovative solutions.</p>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <p><strong>Project One</strong>: A web app for task management.</p>
          <p><strong>Project Two</strong>: A portfolio site with animations.</p>
        </section>
        <section className="contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:singhkumarakshay22@gmail.com">singhkumarakshay22@gmail.com</a></p>
          <p>Phone: <a href="tel:+917309507985">+91-7309507985</a></p>
        </section>
      </div> */}

      {/* Footer with Resume Button */}
      <div className="footer">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="footer-resume-button">
          Download My Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
