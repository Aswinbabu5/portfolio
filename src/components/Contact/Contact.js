import React, { useState } from 'react';
import './Contact.css';
import { Element, animateScroll as scroll } from 'react-scroll';
import resume from '../../assets/aswin_resume.pdf';

const Contact = () => {
    const [copiedItem, setCopiedItem] = useState(null);
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [formSent, setFormSent] = useState(false);

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopiedItem(type);
        setTimeout(() => setCopiedItem(null), 2500);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const mailtoUrl = `mailto:ashwinbabu769@gmail.com?subject=${encodeURIComponent(formState.subject || `Portfolio Message from ${formState.name}`)}&body=${encodeURIComponent(`From: ${formState.name} (${formState.email})\n\n${formState.message}`)}`;
        window.location.href = mailtoUrl;
        setFormSent(true);
        setTimeout(() => setFormSent(false), 4000);
    };

    return (
        <Element id="contact" name="contact" className="contact-section">
            <div className="content-wrapper">
                <div className="section-header">
                    <span className="section-badge">Get In Touch</span>
                    <h2 className="section-title">
                        Let's Build Something <span className="gradient-text">Exceptional</span>
                    </h2>
                    <p className="section-subtitle">
                        Whether you have an opportunity, a DevOps challenge, or a full-stack project in mind, I'd love to connect.
                    </p>
                </div>

                <div className="contact-layout-grid">
                    <div className="contact-info-column">
                        <div className="contact-card glass-card">
                            <div className="contact-card-icon email">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                            </div>
                            <div className="contact-card-details">
                                <span className="contact-card-label">Email Address</span>
                                <span className="contact-card-value">ashwinbabu769@gmail.com</span>
                            </div>
                            <div className="contact-card-buttons">
                                <button className="contact-copy-btn" onClick={() => handleCopy('ashwinbabu769@gmail.com', 'email')}>
                                    {copiedItem === 'email' ? '✓ Copied' : 'Copy'}
                                </button>
                                <a href="mailto:ashwinbabu769@gmail.com" className="contact-action-btn">Send</a>
                            </div>
                        </div>

                        <div className="contact-card glass-card">
                            <div className="contact-card-icon phone">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                            </div>
                            <div className="contact-card-details">
                                <span className="contact-card-label">Direct Phone</span>
                                <span className="contact-card-value">+91 93424 89851</span>
                            </div>
                            <div className="contact-card-buttons">
                                <button className="contact-copy-btn" onClick={() => handleCopy('+919342489851', 'phone')}>
                                    {copiedItem === 'phone' ? '✓ Copied' : 'Copy'}
                                </button>
                                <a href="tel:+919342489851" className="contact-action-btn">Call</a>
                            </div>
                        </div>

                        <div className="socials-glass-row">
                            <a href="https://www.linkedin.com/in/aswin-babu-km/" target="_blank" rel="noopener noreferrer" className="social-glass-item glass-card">
                                <div className="social-icon-wrapper linkedin">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </div>
                                <div className="social-meta">
                                    <span className="social-name">LinkedIn</span>
                                    <span className="social-handle">aswin-babu</span>
                                </div>
                                <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </a>

                            <a href="https://github.com/Aswinbabu5" target="_blank" rel="noopener noreferrer" className="social-glass-item glass-card">
                                <div className="social-icon-wrapper github">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </div>
                                <div className="social-meta">
                                    <span className="social-name">GitHub</span>
                                    <span className="social-handle">@Aswinbabu5</span>
                                </div>
                                <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-column">
                        <div className="liquid-glass-glow liquid-glow-top" aria-hidden="true"></div>
                        <div className="liquid-glow-bottom liquid-glass-glow" aria-hidden="true"></div>
                        <form onSubmit={handleFormSubmit} className="contact-form liquid-glass-form">
                            <div className="form-liquid-specular" aria-hidden="true"></div>
                            <div className="form-liquid-lens" aria-hidden="true"></div>

                            <div className="form-header-badge">
                                <span className="pulse-dot"></span>
                                <span>Direct Mail Pipeline</span>
                            </div>

                            <h3 className="form-title">Send a Quick Message</h3>
                            <p className="form-desc">Fill out this note to connect directly to my inbox.</p>

                            <div className="form-group">
                                <label>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    Your Name
                                </label>
                                <input 
                                    type="text" 
                                    required 
                                    placeholder="Jane Doe"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                        <polyline points="22,6 12,13 2,6"/>
                                    </svg>
                                    Your Email
                                </label>
                                <input 
                                    type="email" 
                                    required 
                                    placeholder="jane@company.com"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    Subject
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Job Opportunity / Project Collaboration"
                                    value={formState.subject}
                                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                    </svg>
                                    Message
                                </label>
                                <textarea 
                                    required 
                                    rows="4"
                                    placeholder="Hi Aswin, I'd like to discuss an opportunity..."
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                />
                            </div>

                            <button type="submit" className="form-submit-btn">
                                <span className="btn-liquid-sheen" aria-hidden="true"></span>
                                <span>Send Message via Email</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="22" y1="2" x2="11" y2="13"/>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                                </svg>
                            </button>

                            {
                                formSent && (
                                    <div className="form-toast-success">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span>Email client triggered! Looking forward to connecting.</span>
                                    </div>
                                )
                            }
                        </form>
                    </div>
                </div>

                <footer className="portfolio-footer">
                    <div className="footer-content">
                        <div className="footer-left">
                            <span className="footer-brand">Aswin Babu</span>
                            <span className="footer-tagline">Building reliable systems, clean software, and modern cloud architectures.</span>
                        </div>
                        <div className="footer-links">
                            <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                            <a href="https://github.com/Aswinbabu5" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://www.linkedin.com/in/aswin-babu-3baab235a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <button className="footer-top-btn" onClick={() => scroll.scrollToTop()}>
                                <span>Back to Top &uarr;</span>
                            </button>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Aswin Babu. Engineered with React, GSAP & Modern Web Tech.</p>
                    </div>
                </footer>
            </div>
        </Element>
    );
};

export default Contact;
