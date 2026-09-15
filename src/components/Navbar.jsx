import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['about', 'About'],
    ['projects', 'Projects'],
    ['contact', 'Contact'],
  ];

  // Smooth-scroll helper: close the mobile menu first (so its closing
  // animation doesn't fight the page scroll), then glide to the section.
  const goTo = (e, id) => {
    e.preventDefault();
    const wasOpen = open;
    setOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, wasOpen ? 140 : 0);
  };

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" onClick={(e) => goTo(e, 'top')}>
          <span className="nav-brand-mark">SP</span>
          <span className="nav-brand-meta">Surya Prakash<span className="nav-brand-blk"> / AI-ML</span></span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
          {links.map(([href, label]) => (
            <a key={href} href={`#${href}`} onClick={(e) => goTo(e, href)}>
              <span className="nav-count">0{links.findIndex(([h]) => h === href) + 1}.</span>
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={(e) => goTo(e, 'contact')}>
            Contact
          </a>
        </nav>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span></span><span></span>
        </button>
      </div>
    </header>
  );
}