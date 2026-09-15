import React from 'react';
import './About.css';

export default function About() {
  const skills = [
    'Python',
    'Machine Learning',
    'Data Analysis',
    'Scikit-learn',
    'Pandas & NumPy',
    'TensorFlow',
    'Deep Learning',
    'Streamlit'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-intro">
            <div className="intro-card">
              <div className="intro-icon">🎓</div>
              <div className="intro-text">
                <p>
                  I'm a <strong>3rd year B.Tech CSE (AI & ML) student</strong> at Godavari Global University with hands-on
                  experience in data analysis, machine learning pipelines, and model evaluation using Python
                  and scikit-learn. I'm actively building skills in supervised learning, feature engineering,
                  and applied AI.
                </p>
                <p>
                  Currently seeking an <strong>AI/ML or Data Science internship</strong> to apply my skills, contribute to
                  real-world projects, and continue growing as an engineer. Passionate about leveraging data
                  to solve meaningful problems.
                </p>
              </div>
            </div>
          </div>

          <div className="about-details">
            <div className="education-section">
              <h3>
                <span className="section-icon">🎓</span>
                Education
              </h3>
              <div className="education-card">
                <div className="education-header">
                  <h4>B.Tech in Computer Science & Engineering</h4>
                  <span className="education-year">2022 – Present</span>
                </div>
                <p className="education-specialization">Specialization: Artificial Intelligence & Machine Learning</p>
                <p className="education-institution">Godavari Global University</p>
                <div className="education-grade">
                  <span className="grade-label">CGPA:</span>
                  <span className="grade-value">7.63 / 10</span>
                </div>
              </div>
            </div>

            <div className="skills-section">
              <h3>
                <span className="section-icon">⚡</span>
                Technical Skills
              </h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="stats-section">
            <div className="stat-card">
              <div className="stat-icon">💻</div>
              <div className="stat-content">
                <h4 className="stat-number">15+</h4>
                <p className="stat-label">Projects Completed</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-content">
                <h4 className="stat-number">2+</h4>
                <p className="stat-label">Years of Learning</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📚</div>
              <div className="stat-content">
                <h4 className="stat-number">8+</h4>
                <p className="stat-label">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}