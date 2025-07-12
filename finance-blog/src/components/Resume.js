import React from 'react';
import './Resume.css';

const Resume = () => {
  const experiences = [
    {
      companyName: "Michigan Medicine",
      location: "Ann Arbor, MI",
      title: "Software Engineer",
      date: "09/2023 - Present",
      description: "Design, develop, and maintain the frontend, backend, and devops of a variety of tools, applications, and dashboards to improve digital pathology workflow using PHP, React, SQL, and Jenkins.",
      technologies: ["PHP", "React", "SQL", "Jenkins", "Docker", "Python", "Bash"],
      image: "/mm.png"
    },
    {
      companyName: "Coupa Software, Inc.",
      location: "Ann Arbor, MI",
      title: "Software Engineer",
      date: "01/2023 - 06/2023",
      description: "Analyzed and updated the Kafka custom connector, a critical platform component for loading data to and from JDBC-compatible databases. Refactored code using design patterns and increased unit test coverage from 20% to 80%.",
      technologies: ["ASP.NET Core", "React", "Kafka", "JDBC", "Sonar", "Unit Testing"],
      image: "/coupa.png"
    },
    {
      companyName: "Nutshell, Inc.",
      location: "Ann Arbor, MI",
      title: "Software Engineer",
      date: "05/2022 - 11/2022",
      description: "Developed new features for the CRM, such as multifactor authentication, in PHP, GraphQL, and SQL. Worked closely with the acquiring digital marketing firm to integrate customer data and APIs.",
      technologies: ["PHP", "GraphQL", "SQL", "Docker", "Git", "Jenkins", "Visual Studio"],
      image: "/nutshell.png"
    },
    {
      companyName: "Domino's Pizza, LLC",
      location: "Ann Arbor, MI",
      title: "Site Reliability/DevOps Engineer",
      date: "01/2020 - 05/2022",
      description: "Worked to implement Pivotal Kubernetes Service (PKS) within the environment, which involved cluster buildout, environment configuration, monitoring, Helm chart development, and infrastructure-as-code.",
      technologies: ["Kubernetes", "JenkinsX", "Helm", "Java", "Jenkins", "Infrastructure-as-Code"],
      image: "/dominos.png"
    },
    {
      companyName: "Domino's Pizza, LLC",
      location: "Ann Arbor, MI",
      title: "Technology Rotation Program",
      date: "06/2018 - 12/2019",
      description: "Working on a lean team as the sole backend developer, used Java, Spring framework, Maven, ActiveMQ and other tools to develop backend services for various internal tools and applications.",
      technologies: ["Java", "Spring", "Maven", "ActiveMQ", "Backend Development"],
      image: "/dominos.png"
    }
  ];

  const education = [
    {
      institution: "The University of Michigan",
      degree: "Computer Science B.S.E.",
      location: "Ann Arbor, MI",
      date: "09/2014 - 04/2018",
      gpa: null
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "PHP", "Java", "C++", "C#", "Bash", "SQL", "R", "Ansible", "Puppet"],
    "Web Technologies": ["React", "HTML", "CSS", "JavaScript", "jQuery", "Laravel", "Axios", "GraphQL"],
    "DevOps & Cloud": ["Kubernetes", "Docker", "Helm", "Jenkins", "Nginx", ".NET", "Linux", "Windows"],
    "Tools & Platforms": ["Git", "Visual Studio", "Maven", "ActiveMQ", "Kafka", "JDBC", "Sonar"]
  };

  return (
    <div className="resume">
      <div className="container">
        <h1 className="resume-title">Resume & Experience</h1>
        
        {/* Experience Section */}
        <section className="resume-section">
          <h2 className="section-title">
            <span className="section-icon">💼</span>
            Work Experience
          </h2>
          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <div className="company-logo">
                    <img src={exp.image} alt={exp.companyName} />
                  </div>
                  <div className="experience-info">
                    <h3 className="company-name">{exp.companyName}</h3>
                    <p className="job-title">{exp.title}</p>
                    <p className="job-location">{exp.location}</p>
                    <p className="job-date">{exp.date}</p>
                  </div>
                </div>
                <p className="job-description">{exp.description}</p>
                <div className="technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="resume-section">
          <h2 className="section-title">
            <span className="section-icon">🎓</span>
            Education
          </h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-header">
                  <h3 className="institution">{edu.institution}</h3>
                  <p className="degree">{edu.degree}</p>
                  <p className="location">{edu.location}</p>
                  <p className="date">{edu.date}</p>
                  {edu.gpa && <p className="gpa">GPA: {edu.gpa}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="resume-section">
          <h2 className="section-title">
            <span className="section-icon">🛠️</span>
            Skills & Technologies
          </h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="skill-category">
                <h3 className="skill-category-title">{category}</h3>
                <div className="skill-list">
                  {skillList.map((skill, index) => (
                    <span key={index} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Download Resume */}
        <section className="resume-section">
          <div className="download-section">
            <h2 className="section-title">Download Resume</h2>
            <p>Get a PDF version of my complete resume</p>
            <button className="btn btn-primary download-btn">
              📄 Download PDF
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume; 