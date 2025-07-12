import React from 'react';
import './css/Projects.css';  // Include any specific styles for projects

const projects = [
  {
    title: "Todo App",
    image: "static/todo.png",
    description: "A simple Todo application built using ASP.NET Core MVC framework. It allows you to create, read, update, and delete tasks.",
    codeLink: "https://github.com/nkathawa/Todo"
  },
  {
    title: "Personal Website",
    image: "static/websiteIcon.png",
    description: "My personal website, created from scratch using HTML, CSS, and JavaScript. I created this website to get a better understanding of web development.",
    codeLink: "https://github.com/nkathawa/nkathawa.github.io"
  },
  // Add other projects following the same structure
];

function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects_div">
        {projects.map((project, index) => (
          <div key={index} className="divIndexProjects">
            <h2 className="projects-h1"><center>{project.title}</center></h2>
            <img className="img-padding-top" src={project.image} alt={project.title} />
            <div className="buttons">
              <div className="tooltip">
                <button className="left-button" type="button">Description</button>
                <span className="tooltiptext">{project.description}</span>
              </div>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                <button type="button">Code</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;