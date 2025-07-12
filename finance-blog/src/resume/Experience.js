import React from 'react';
import './Resume.css';

function Experience() {
  const experiences = [
    {
      companyName: "Michigan Medicine",
      location: "Ann Arbor, MI",
      title: "Software Engineer",
      date: "09/2023 - Present",
      description: "Design and develop tools using PHP, React, SQL, and Jenkins.",
      image: "static/mm.png",
      link: "https://www.uofmhealth.org/"
    },
    // Add more experiences
  ];

  return (
    <section>
      <h1>Work Experience</h1>
      <div className="flex-container">
        {experiences.map((exp, index) => (
          <div key={index} className="flex-item">
            <a href={exp.link} target="_blank" rel="noopener noreferrer">
              <img src={exp.image} alt={exp.companyName} />
            </a>
            <h3>{exp.companyName}, {exp.location}</h3>
            <p><strong>{exp.title}</strong> - {exp.date}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;