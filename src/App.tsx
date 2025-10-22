import "./App.css";
import Header from "./components/header";
import Project from "./components/project-card";
import { Projects, Skills } from "./data";
import { useEffect } from "react";
// resume PDF import (Vite resolves asset imports to a URL)
import resumePdf from "./assets/Bently-Rafa-Resume.pdf";
import { track } from "@vercel/analytics/react";

export default function Home() {

  // Handle hash navigation on page load
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1); // Remove the #
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100); // Small delay to ensure page is rendered
      }
    };

    // Handle initial load
    handleHashNavigation();

    // Handle hash changes (back/forward navigation)
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);
  return(
    <>
      {/* Header */}
      <Header/>
      
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              HI, I'M <span className="highlight">BENTLY RAFA</span>
            </h1>
            <p className="hero-subtitle">FULL-STACK DEVELOPER & AI ENGINEER</p>
            <p className="hero-description">
              I create modern web applications, extensions, and AI solutions with clean code and innovative designs.
              Passionate about solving real-world problems through technology and AI.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => {
                  const element = document.getElementById('projects');
                  track('ProjectsViewed')
                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                VIEW MY WORK
              </button>
              <a
                href={resumePdf}
                download="Bently-Rafa-Resume.pdf"
                className="btn btn-secondary"
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => {track('ResumeClick')}}
              >
                 DOWNLOAD RESUME
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/image-hero.jpg" alt="Bently Rafa" className="hero-photo" />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">MY SKILLS</h2>
          <div className="skills-grid">
            <div className="skill-card languages-card">
              <h3>LANGUAGES</h3>
              <div className="language-skills">
                {Skills.languages.map((language, index) => (
                  <div key={index} className="language-skill">
                    <div className="language-header">
                      <span className="language-name">{language.name}</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${language.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-card">
              <h3>FRAMEWORKS</h3>
              <div className="skill-tags">
                {Skills.frameworks.map((framework, index) => (
                  <span key={index} className="skill-tag">{framework}</span>
                ))}
              </div>
            </div>
            <div className="skill-card">
              <h3>TOOLS</h3>
              <div className="skill-tags">
                {Skills.tools.map((tool, index) => (
                  <span key={index} className="skill-tag">{tool}</span>
                ))}
              </div>
            </div>
            <div className="skill-card">
              <h3>DATABASES</h3>
              <div className="skill-tags">
                {Skills.databases.map((database, index) => (
                  <span key={index} className="skill-tag">{database}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">MY PROJECTS</h2>
          <div className="projects">
            {Projects.map((project) => (
              <Project
                key={project.id}
                id={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About me */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">ABOUT ME</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate full-stack developer with a love for creating 
                clean, efficient, and user-friendly web applications. My journey 
                in programming started with curiosity and has evolved into a 
                dedicated career in technology.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying a good cup of 
                coffee while planning my next big project.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">PROJECTS</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">YEARS</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">TECHNOLOGIES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact me */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">LET'S WORK TOGETHER</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>GET IN TOUCH</h3>
              <p>
                Ready to bring your ideas to life? Let's discuss your next project 
                and create something amazing together.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-label">EMAIL</span>
                  <span className="contact-value">rafabently01@example.com</span>
                </div>
                <div className="contact-method">
                  <span className="contact-label">PHONE</span>
                  <span className="contact-value">+63 (949) 468-4603</span>
                </div>
                <div className="contact-method">
                  <span className="contact-label">LOCATION</span>
                  <span className="contact-value">Sampaloc Manila, Metro Manila</span>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">NAME</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">MESSAGE</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    
    </>
  );
}