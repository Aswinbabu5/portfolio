import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-scroll';
import resume from '../../assets/aswin_devops_resume.pdf';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 40);

            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                setScrollProgress((currentScrollY / totalHeight) * 100);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { 
            name: 'About', 
            target: 'About' 
        },
        { 
            name: 'Skills', 
            target: 'Skills' 
        },
        { 
            name: 'Projects', 
            target: 'Projects' 
        },
        { 
            name: 'Experience', 
            target: 'exper' 
        },
        { 
            name: 'Contact', 
            target: 'contact' 
        }
    ];

    return (
        <header className={`header-wrapper ${scrolled ? 'header-scrolled' : ''}`}>
            <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

            <nav className="header-nav">
                <Link to="About" smooth={true} duration={500} className="nav-brand">
                    <div className="brand-logo-icon">
                        <span>AB</span>
                    </div>
                    <div className="brand-text">
                        <span className="brand-name">aswin babu</span>
                        <span className="brand-role">Full Stack & DevOps</span>
                    </div>
                </Link>

                <div className="nav-availability">
                    <span className="beacon-dot"></span>
                    <span className="availability-text">Open for Roles</span>
                </div>

                <div className="nav-desktop-links">
                    {
                        navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.target}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-90}
                                activeClass="nav-link-active"
                                className="nav-link"
                            >
                                {link.name}
                            </Link>
                        ))
                    }
                    <a href={resume} target="_blank" rel="noopener noreferrer" className="nav-resume-btn">
                        <span>Resume</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </a>
                </div>

                <button className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle mobile menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}>
                <div className="mobile-drawer-links">
                    {
                        navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.target}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="mobile-nav-item"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))
                    }
                    <a href={resume} target="_blank" rel="noopener noreferrer" className="mobile-nav-resume-btn" onClick={() => setMobileMenuOpen(false)}>
                        View Resume (PDF)
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
