import React from 'react';
import './Resume.css';

const Resume = () => {
  // Helper function to format achievements with bold keywords
  const formatAchievement = (achievement) => {
    const colonIndex = achievement.indexOf(':');
    if (colonIndex !== -1) {
      const keyword = achievement.substring(0, colonIndex);
      const description = achievement.substring(colonIndex + 1);
      return <><strong>{keyword}:</strong>{description}</>;
    }
    return achievement;
  };

  const experiences = [
    {
      companyName: "Michigan Medicine",
      location: "Ann Arbor, MI",
      title: "Software Engineer",
      date: "09/2023 - Present",
      achievements: [
        "Digital Pathology Tools: Design, develop, and maintain the frontend, backend, and devops of a variety of tools, applications, and dashboards to improve digital pathology workflow using PHP, React, SQL, and Jenkins, increasing efficiency of labs, aiding in the digitization of pathology operations, and giving insights into process improvement opportunities",
        "Scanner Dashboard: Developed a web application using PHP, React, and SQL to monitor and manage a fleet of high throughput slide scanners, including real-time status updates and error notifications, allowing for increased efficiency of lab operations and reduced scanner downtime",
        "Internal Efficiency: Create, maintain, and improve internal tools to address a variety of team and department needs, including data analysis, process automation, and workflow optimization. Improve manual and inefficient processes with robust, reliable, and maintainable scripts and applications using PHP, React, Python, Bash, SQL, and Jenkins",
        "Slide Deidentification: Overhauled a decades-old slide deidentification script using modern technologies and languages including Python, Docker, Jenkins, and Git to improve speed, reliability, and maintainability"
      ],
      technologies: ["PHP", "React", "SQL", "Jenkins", "Docker", "Python", "Bash"],
      image: "/michigan.png"
    },
    {
      companyName: "Coupa Software, Inc.",
      location: "Ann Arbor, MI",
      title: "Software Engineer",
      date: "01/2023 - 06/2023",
      achievements: [
        "Service Maintenance: Analyzed and updated the Kafka custom connector, a critical platform component for loading data to and from JDBC-compatible databases. Refactored code using design patterns and recommendations from Sonar, increased unit test coverage from 20% to 80%, and improved documentation all while ensuring functionality was maintained",
        "Bug Fixes: Addressed bugs to improve the resiliency and maintainability of the ASP.NET Core platform. Worked with both the frontend React and cshtml code and the .NET backend to deliver timely and thorough bug fixes, working closely with QA and product owners in order to ensure correct functionality and stable performance"
      ],
      technologies: ["ASP.NET Core", "React", "Kafka", "JDBC", "Sonar", "Unit Testing"],
      image: "/coupa.png"
    },
    {
      companyName: "Nutshell, Inc.",
      location: "Ann Arbor, MI",
      title: "Software Engineer",
      date: "05/2022 - 11/2022",
      achievements: [
        "Feature Development: Developed new features for the CRM, such as multifactor authentication, in PHP, GraphQL, and SQL using Docker, Git, Jenkins, and Visual Studio. Worked closely with the acquiring digital marketing firm to integrate our customer data and APIs with theirs, allowing for a more seamless transition for customers",
        "Escalations: Effectively handled customer escalations in a timely manner using troubleshooting skills and clear communication, working closely with stakeholders and the support team to understand and resolve application issues"
      ],
      technologies: ["PHP", "GraphQL", "SQL", "Docker", "Git", "Jenkins", "Visual Studio"],
      image: "/nutshell.png"
    },
    {
      companyName: "Domino's Pizza, LLC",
      location: "Ann Arbor, MI",
      title: "Site Reliability/DevOps Engineer",
      date: "01/2020 - 05/2022",
      achievements: [
        "Kubernetes: Worked to implement Pivotal Kubernetes Service (PKS) within the environment, which involved cluster buildout, environment configuration, monitoring, Helm chart development, and infrastructure-as-code",
        "JenkinsX: Built out JenkinsX within the PKS environment using Helm charts and running end-to-end validation scripts for each update to ensure the environment was stable and contained the latest changes, allowing for more rapid development",
        "Java Installation Automation: Developed a method for seamless and automated Java installation for runtime environments, cutting time spent by SRE resources installing Java on VMs. The change empowered development teams to more easily upgrade the JDK version for their own services, increasing the security and reliability of their applications",
        "General Automation: Developed Jenkins jobs for automating various manual tasks, working with a technical delivery manager to provide data on potential time savings and error reduction"
      ],
      technologies: ["Kubernetes", "JenkinsX", "Helm", "Java", "Jenkins", "Infrastructure-as-Code"],
      image: "/dominos.png"
    },
    {
      companyName: "Domino's Pizza, LLC",
      location: "Ann Arbor, MI",
      title: "Technology Rotation Program",
      date: "06/2018 - 12/2019",
      achievements: [
        "Digital Shoulder Surfing: Working on a lean team as the sole backend developer, used Java, Spring framework, Maven, ActiveMQ and other tools to develop the backend service for a technology which enables in-store employees to see order information ahead of time, allowing them to prepare orders more quickly",
        "Service Health Tool: Developed a tool to check the health of all services, and to gather relevant data to ensure applications are running with the proper versions, saving time and finding issues by running during releases and datacenter changes. The tool automatically attempted to restart down services, improving the resiliency and maintainability of the environment",
        "Environment Audit Tool: Created a tool for comparing environment configurations to ensure consistency across CPU, memory, ulimits, opt size, and kernel versions. This provided a first pass to find issues in the environment, saving time and reducing manual effort"
      ],
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
                <div className="achievements">
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="achievement-item">
                        {formatAchievement(achievement)}
                      </li>
                    ))}
                  </ul>
                </div>
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
      </div>
    </div>
  );
};

export default Resume; 