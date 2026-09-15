import useReveal from '../hooks/useReveal';
import './Projects.css';

const projects = [
  {
    title: 'Housing Price Prediction',
    description:
      'An end-to-end machine learning project to predict housing prices. Performed data preprocessing, feature engineering, and exploratory data analysis to prepare the dataset. Trained and evaluated a Random Forest Regressor, achieving an R² score of ~0.62. Deployed as an interactive web application.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Git'],
    mark: '🏠',
    github: 'https://github.com/SuryaPrakash32143',
  },
  {
    title: 'AI Resume Reviewer',
    description:
      'An AI-powered application designed using Google Gemini API to analyze resumes against job descriptions, provide matching scores, identify skill gaps, and give constructive feedback to improve resumes.',
    tech: ['Python', 'Google Gemini API', 'Streamlit', 'GitHub'],
    mark: '📄',
    github: 'https://github.com/SuryaPrakash32143',
  },
];

export default function Projects() {
  const headRef = useReveal();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <header className="section-head reveal" ref={headRef}>
          <p className="kicker">02 / Work</p>
          <h2 className="section-title">Projects</h2>
        </header>

        <div className="projects-list">
          {projects.map((p, i) => (
            <ProjectRow key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ p, index }) {
  const ref = useReveal();

  return (
    <article className="project-row reveal" ref={ref}>
      <div className="project-index mono">0{index + 1}</div>

      <div className="project-main">
        <div className="project-title-line">
          <span className="project-mark" aria-hidden="true">{p.mark}</span>
          <h3 className="project-title">{p.title}</h3>
        </div>
        <p className="project-desc">{p.description}</p>

        <ul className="project-tech">
          {p.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <a
          className="project-github mono"
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${p.title} source code`}
        >
          <span>github.com/SuryaPrakash32143</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}