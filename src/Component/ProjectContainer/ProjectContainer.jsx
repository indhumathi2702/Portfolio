import React from "react";
import { Element } from "react-scroll";

const ProjectContainer = () => {
  // Create Structure
  const projects = [
    {
      title: "Smart Login System Using Face Recognition.",
      desc: "Developed a secure login system using facial recognition technology",
    },
    {
      title:
        "Spatio-Temporal Network for Detecting Bank Suspicious Activities.",
      desc: " Analyzed bank transactions to detect suspicious activities.",
    },
    {
      title: "Task Management App",
      desc: "This is Front end Task Management application",
    },
    {
      title: "React - E-Commerce Application",
      desc: "E-Commerce App Using React with JSON Data",
    },
  ];
  return (
    <Element className="projectContainer" id="project">
      <h1>
        Projects :
      </h1>
      <p>Here are some Project Which I done For making lives of people easy.</p>
      <div className="projectContainer_list">
        {projects.map((item, index) => (
          <div key={index} className="projectContainer_item">
            <h3> {item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default ProjectContainer;
