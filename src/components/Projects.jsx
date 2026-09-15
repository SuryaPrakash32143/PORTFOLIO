import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      title: 'Housing Price Prediction',
      description: 'An end-to-end machine learning project to predict housing prices. Performed data preprocessing, feature engineering, and exploratory data analysis to prepare the dataset. Trained and evaluated a Random Forest Regressor, achieving an R² score of ~0.62. Deployed as an interactive web application.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Git'],
      image: '🏠',
      link: '#',
      github: 'https://github.com/SuryaPrakash32143',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'AI Resume Reviewer',
      description: 'An AI-powered application designed using Google Gemini API to analyze resumes against job descriptions, provide matching scores, identify skill gaps, and give constructive feedback to improve resumes.',
      tech: ['Python', 'Google Gemini API', 'Streamlit', 'GitHub'],
      image: '📄',
      link: '#',
      github: 'https://github.com/SuryaPrakash32143',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Deep Learning Projects',
      description: 'Built neural network models using TensorFlow and Keras for various tasks including image classification, sentiment analysis, and more. Implemented CNN, RNN, and various deep learning architectures.',
      tech: ['Python', 'TensorFlow', 'Keras', 'Deep Learning'],
      image: '🧠',
      link: '#',
      github: 'https://github.com/SuryaPrakash32143',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A collection of my recent work in AI/ML and Data Science
        </p>

        <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-image" style={{ background: project.color }}>
                <div className="project-emoji">{project.image}</div>
                <div className="project-overlay">
                  <div className="project-links-overlay">
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        className="overlay-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View live demo"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                    )}
                    <a
                      href={project.github}
                      className="overlay-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View source code"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tech.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    className="project-link github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}