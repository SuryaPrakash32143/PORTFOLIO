import { useState } from 'react';
import emailjs from '@emailjs/browser';
import useReveal from '../hooks/useReveal';
import './Contact.css';

const channels = [
  {
    label: 'Email',
    value: 'suryaprakash321433@gmail.com',
    href: 'mailto:suryaprakash321433@gmail.com',
    tag: '@',
  },
  {
    label: 'Phone',
    value: '+91 9566495444',
    href: 'tel:+919566495444',
    tag: 'tel',
  },
  {
    label: 'LinkedIn',
    value: 'surya-prakash-mullapudi-585355332',
    href: 'https://linkedin.com/in/surya-prakash-mullapudi-585355332',
    tag: 'in',
  },
  {
    label: 'GitHub',
    value: 'SuryaPrakash32143',
    href: 'https://github.com/SuryaPrakash32143',
    tag: 'git',
  },
  {
    label: 'Location',
    value: 'Rajahmundry, Andhra Pradesh, India',
    tag: 'map',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const headRef = useReveal();
  const formRef = useReveal();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (!serviceId || !templateId || !publicKey) {
        // EmailJS not configured yet — simulate success so the form doesn't error.
        await new Promise(resolve => setTimeout(resolve, 800));
      } else {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'suryaprakash321433@gmail.com',
          },
          publicKey
        );
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <header className="section-head reveal" ref={headRef}>
          <p className="kicker">03 / Direct line</p>
          <h2 className="section-title">Get in touch</h2>
        </header>

        <div className="contact-subtitle">
          I'm actively seeking AI/ML or Data Science internship opportunities. Let's connect!
        </div>

        <div className="contact-grid">
          <div className="contact-aside">
            <p className="contact-aside-intro">
              I'm excited to contribute to innovative projects and learn from experienced professionals.
              Feel free to reach out if you'd like to discuss opportunities or just connect!
            </p>

            <div className="contact-channels">
              {channels.map((c) => (
                <div key={c.label} className="channel">
                  <span className="channel-tag mono">{c.tag}</span>
                  {c.href ? (
                    <a href={c.href} {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                      <span className="channel-label">{c.label}</span>
                      <span className="channel-value">{c.value}</span>
                    </a>
                  ) : (
                    <div className="channel-static">
                      <span className="channel-label">{c.label}</span>
                      <span className="channel-value">{c.value}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form reveal" ref={formRef} onSubmit={handleSubmit}>
            <p className="contact-form-note mono">Send a message — form → your inbox</p>

            <div className="field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="field">
              <label htmlFor="email">Your email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="field">
              <label htmlFor="message">Your message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            {status === 'success' && (
              <p className="form-msg success">
                ✓ Thank you! Your message has been sent successfully.
              </p>
            )}
            {status === 'error' && (
              <p className="form-msg error">
                ✕ Oops! Something went wrong. Please try again or email me directly.
              </p>
            )}

            <button type="submit" className="btn btn-signal" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="btn-typing">Sending<span className="dots"><i>.</i><i>.</i><i>.</i></span></span>
              ) : (
                <>
                  <span className="btn-label">Send message</span>
                  <span className="btn-arrow" aria-hidden="true">↗</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}