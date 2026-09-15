import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-brand mono">SP<span className="footer-slash"> / </span>Surya Prakash</span>
          <p className="footer-tag">Building intelligent solutions for tomorrow's problems.</p>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <span className="footer-col-title">Index</span>
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-links">
            <span className="footer-col-title">Connect</span>
            <a href="https://github.com/SuryaPrakash32143" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/surya-prakash-mullapudi-585355332" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:suryaprakash321433@gmail.com">Email</a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} Surya Prakash. All rights reserved.</span>
        <span className="footer-stamp mono">source: /home/suryaprakash/portfolio</span>
      </div>
    </footer>
  );
}