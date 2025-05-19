import React, { useEffect } from "react";

const BlinkingLights = () => {
    useEffect(() => {
        const container = document.createElement("div");
        container.className = "blinking-lights-container";
        document.body.appendChild(container);

        const lightCount = 100;
        const lights = [];

        for (let i = 0; i < lightCount; i++) {
            const light = document.createElement("div");
            light.className = "blinking-light";

            light.style.left = `${Math.random() * 100}vw`;
            light.style.top = `${Math.random() * 100}vh`;
            light.style.animationDuration = `${1 + Math.random() * 2}s`;
            light.style.backgroundColor = Math.random() > 0.5 ? "#a8c0ff" : "#4a90e2";
            light.style.opacity = Math.random() * 0.6 + 0.2;

            container.appendChild(light);
            lights.push(light);
        }

        // Track cursor
        const handleMouseMove = (e) => {
            lights.forEach((light, i) => {
                const offsetX = (e.clientX / window.innerWidth - 0.5) * 10;
                const offsetY = (e.clientY / window.innerHeight - 0.5) * 10;
                light.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeChild(container);
        };
    }, []);

    return null;
};

export default BlinkingLights;
