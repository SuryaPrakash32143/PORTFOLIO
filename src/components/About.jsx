import useReveal from '../hooks/useReveal';
import './About.css';

const skills = [
  'Python',
  'Machine Learning',
  'Data Analysis',
  'Scikit-learn',
  'Pandas & NumPy',
  'TensorFlow',
  'Deep Learning',
  'Streamlit',
];

const stats = [
  { value: '2', label: 'Projects completed' },
  { value: '2+', label: 'Years of learning' },
  { value: '8', label: 'Technologies' },
];

export default function About() {
  const headRef = useReveal();
  const introRef = useReveal();
  const statsRef = useReveal();

  return (
    <section id="about" className="about">
      <div className="container">
        <header className="section-head reveal" ref={headRef}>
          <p className="kicker">01 / Profile</p>
          <h2 className="section-title">About me</h2>
        </header>

        <div className="about-grid">
          <div className="about-intro reveal" ref={introRef}>
            <p>
              I'm a <strong>3rd year B.Tech CSE (AI &amp; ML) student</strong> at Godavari Global University with hands-on
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

          <div className="about-edge">
            <h3 className="about-edge-title">
              <span className="kicker" style={{ marginBottom: 0 }}>Education</span>
            </h3>
            <p className="about-degree">B.Tech in Computer Science &amp; Engineering</p>
            <p className="about-spec">Specialization: Artificial Intelligence &amp; Machine Learning</p>
            <p className="about-school">Godavari Global University</p>
            <p className="about-cgpa">CGPA — <strong>7.63 / 10</strong></p>
            <p className="about-years">2022 — Present</p>
          </div>
        </div>

        <div className="about-skills">
          <h3 className="about-skills-title">Technical skills</h3>
          <ul className="about-skills-list">
            {skills.map((skill, i) => (
              <li key={skill}>
                <span className="skill-num mono">0{i + 1}</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="about-stats reveal" ref={statsRef}>
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}