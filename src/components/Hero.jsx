import { useEffect, useState } from 'react';
import './Hero.css';

const roles = [
  'AI/ML Engineer',
  'Data Scientist',
  'Machine Learning Developer',
  'Python Developer',
];

const modelCard = {
  name: 'Surya Prakash',
  role: 'AI / ML Engineer',
  status: 'open_to_work',
  university: 'Godavari Global University',
  year: '3',
  focus: ['supervised_learning', 'feature_engineering', 'applied_ai'],
  languages: ['python', 'javascript'],
  metrics: { r2_score: '~0.62', cgpa: '7.63' },
};

function JsonBox() {
  const renderValue = (value) => {
    if (typeof value === 'string') return `"${value}"`;
    if (Array.isArray(value)) return `["${value.join('", "')}"]`;
    if (typeof value === 'object') {
      return (
        <span className="json-inline">
          {'{ '}
          {Object.entries(value).map(([k, v], i, arr) => (
            <span key={k}>
              <span className="json-k">{k}</span>: {renderValue(v)}
              {i < arr.length - 1 ? ', ' : ' '}
            </span>
          ))}
          {'}'}
        </span>
      );
    }
    return String(value);
  };

  return (
    <div className="jsonbox" role="img" aria-label="model_card.json describing Surya Prakash">
      <div className="jsonbox-top">
        <span className="jsonbox-dots">
          <i /><i /><i />
        </span>
        <span className="jsonbox-title">model_card.json</span>
      </div>
      <pre className="jsonbox-body">
        <code>
          {Object.entries(modelCard).map(([k, v]) => (
            <span className="json-line" key={k}>
              <span className="json-indent">  </span>
              <span className="json-k">"{k}"</span>
              <span>: {renderValue(v)}</span>
              {k !== 'metrics' ? ',' : ''}
              {'\n'}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const fullText = roles[loopNum % roles.length];

    const tick = () => {
      const next = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(next);

      if (!isDeleting && next === fullText) {
        setIsDeleting(true);
      } else if (isDeleting && next === '') {
        setIsDeleting(false);
        setLoopNum(n => n + 1);
      }
    };

    const speed = isDeleting ? 55 : 150;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  const index = [
    ['git', 'github.com/SuryaPrakash32143', 'https://github.com/SuryaPrakash32143'],
    ['in', 'linkedin.com/in/surya-prakash-mullapudi-585355332', 'https://linkedin.com/in/surya-prakash-mullapudi-585355332'],
    ['@', 'suryaprakash321433@gmail.com', 'mailto:suryaprakash321433@gmail.com'],
  ];

  return (
    <section id="top" className="hero">
      <div className="container">
        <p className="hero-kicker mono">$ whoami</p>

        <h1 className="hero-title">
          Surya Prakash —<br />
          building <em>intelligent systems</em>
          <br />
          with Python &amp; data.
        </h1>

        <div className="hero-sub">
          <span className="hero-typing" aria-label="aspiring roles">
            Aspiring <span className="hero-typed">{text}</span>
            <span className="hero-cursor" aria-hidden="true">▌</span>
          </span>
          <span className="hero-dot" aria-hidden="true">·</span>
          <span className="hero-sub-note">B.Tech AI &amp; ML, 3rd year</span>
        </div>

        <p className="hero-deck">
          3rd year B.Tech CSE (AI &amp; ML) student with hands-on experience in data analysis,
          machine learning pipelines, and model evaluation. Passionate about building intelligent
          solutions that solve real-world problems.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-signal">
            <span className="btn-label">View my work</span>
            <span className="btn-arrow" aria-hidden="true">↓</span>
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>

        <div className="hero-links mono-soft">
          {index.map(([tag, label, href]) => (
            <a key={tag} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
              <span className="hero-link-tag">[{tag}]</span> {label}
            </a>
          ))}
        </div>
      </div>

      <JsonBox />
    </section>
  );
}