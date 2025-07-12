import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Navin Kathawa</span>
            </h1>
            <p className="hero-subtitle">
              Software Engineer passionate about creating innovative solutions and sharing financial wisdom. 
              Specializing in full-stack development, DevOps, and digital pathology tools.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">View My Work</button>
              <button className="btn btn-secondary">Get In Touch</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <img src="/headshot.jpg" alt="Navin Kathawa" />
              </div>
              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-number">6+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Companies</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a Software Engineer with over 6 years of experience in full-stack development, DevOps, and system architecture. 
                Currently working at Michigan Medicine, I design and develop tools that improve digital pathology workflows, 
                helping medical professionals work more efficiently.
              </p>
              <p>
                My expertise spans from frontend development with React to backend systems using PHP, Java, and Python. 
                I have extensive experience with DevOps practices, including Kubernetes, Docker, and CI/CD pipelines. 
                When I'm not coding, I'm passionate about personal finance and helping others achieve financial freedom.
              </p>
              <p>
                I believe in creating robust, maintainable solutions that solve real-world problems. 
                My experience ranges from healthcare systems to e-commerce platforms, always focusing on 
                user experience and system reliability.
              </p>
            </div>
            <div className="skills-preview">
              <h3>Technologies I Work With</h3>
              <div className="skills-grid">
                <span className="skill-tag">React</span>
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Jenkins</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Full-Stack Development</h3>
              <p>Building complete web applications from frontend to backend using React, PHP, Java, and modern web technologies.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>DevOps & Infrastructure</h3>
              <p>Implementing CI/CD pipelines, containerization with Docker, and managing Kubernetes clusters for scalable deployments.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏥</div>
              <h3>Healthcare Technology</h3>
              <p>Developing digital pathology tools and medical workflow applications that improve healthcare delivery and efficiency.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Financial Education</h3>
              <p>Sharing insights and strategies for personal finance, budgeting, and investment planning through my blog.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 