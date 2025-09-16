import React from "react";
import { Link } from "react-router-dom";
import calculatorImg from "../assets/calculator.png";
import flamesImg from "../assets/flames.png";
import tttImg from "../assets/ttt.png";
import spsImg from "../assets/sps.jpg";

function Projects() {
  const projectList = [
    { name: "Calculator", path: "/calculator", img: calculatorImg },
    { name: "Flames Game", path: "/flames", img: flamesImg },
    { name: "Tic Tac Toe", path: "/tic-tac-toe", img: tttImg },
    { name: "Stone Paper Scissors", path: "/stone-paper-scissors", img: spsImg },
  ];

  return (
    <div className="projects-container" style={{ textAlign: "center", padding: "40px" }}>
      <h1 style={{ marginBottom: "30px", color: "#222" }}>My Projects</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {projectList.map((project, index) => (
          <Link
            key={index}
            to={project.path}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "15px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={project.img}
                alt={project.name}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                  marginBottom: "15px",
                }}
              />
              <h3>{project.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
