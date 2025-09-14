import React from "react";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import jsImg from "../assets/js.png";
import reactImg from "../assets/react.png";
import nodeImg from "../assets/node.png";
import sqlImg from "../assets/mysql.png";
import "./skills.css";

function Skills() {
  const skills = [
    { img: htmlImg, name: "HTML", para: "HTML: The fundamental language for creating web page structure, using tags to define elements like headings, paragraphs, and images. It provides the skeletal framework for all web content." },
    { img: cssImg, name: "CSS", para: "CSS: The language used to style the look and feel of a website. It controls colors, fonts, layout, and visual presentation, turning raw HTML into a visually appealing design." },
    { img: jsImg, name: "JavaScript", para: "JavaScript: A dynamic programming language that adds interactivity and behavior to web pages. It allows for things like animations, form validation, and manipulating HTML content in real-time." },
    { img: reactImg, name: "ReactJs", para: "React.js: A JavaScript library for building user interfaces, particularly single-page applications. It uses a component-based architecture to create reusable UI elements and efficiently manage the state of the application." },
    { img: nodeImg, name: "NodeJs", para: "Node.js: A JavaScript runtime environment that allows you to run JavaScript on the server side. It's used for building scalable network applications, web servers, and APIs." },
    { img: sqlImg, name: "SQL", para: "MySQL: An open-source relational database management system (RDBMS). It uses structured query language (SQL) to manage and organize data in tables with predefined relationships." },
  ];

  return (
    <>
      <div>
        <h1 className="heading">MY SKILLSET</h1>
        <section className="image-grid">
          {skills.map((skill, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={skill.img} alt={skill.name} />
                </div>
                <div className="flip-card-back">
                  <h3>{skill.para}</h3>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default Skills;
