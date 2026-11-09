import React, { useEffect, useRef } from 'react';
import './TopContent.css';
import resume from '../../assets/aswin_devops_resume.pdf';
import HeroTerminal from './HeroTerminal';
import { runWhenGSAPReady } from '../../utils/gsapHelper';
import { Link } from 'react-scroll';

const TopContent = () => {
    const heroRef = useRef(null);
    const badgeRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);
    const terminalRef = useRef(null);
    const statsRef = useRef(null);
    const aboutCardRef = useRef(null);

    useEffect(() => {
        runWhenGSAPReady((gsap) => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(badgeRef.current, 
                { opacity: 0, y: -20 }, 
                { opacity: 1, y: 0, duration: 0.6 }
            )
            .fromTo(titleRef.current, 
                { opacity: 0, y: 30 }, 
                { opacity: 1, y: 0, duration: 0.8 }, 
                '-=0.3'
            )
            .fromTo(subtitleRef.current, 
                { opacity: 0, y: 20 }, 
                { opacity: 1, y: 0, duration: 0.6 }, 
                '-=0.4'
            )
            .fromTo(ctaRef.current, 
                { opacity: 0, y: 20 }, 
                { opacity: 1, y: 0, duration: 0.6 }, 
                '-=0.3'
            )
            .fromTo(terminalRef.current, 
                { opacity: 0, scale: 0.95, y: 30 }, 
                { opacity: 1, scale: 1, y: 0, duration: 0.9 }, 
                '-=0.6'
            )
            .fromTo(statsRef.current, 
                { opacity: 0, y: 30 }, 
                { opacity: 1, y: 0, duration: 0.7 }, 
                '-=0.4'
            );

            if (window.ScrollTrigger && aboutCardRef.current) {
                gsap.fromTo(aboutCardRef.current,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.9,
                        scrollTrigger: {
                            trigger: aboutCardRef.current,
                            start: 'top 85%',
                        }
                    }
                );
            }
        });
    }, []);

    return (
        <div ref={heroRef} className="topcontent-section">
            <div className="content-wrapper">
                <div className="hero-grid">
                    <div className="hero-left">
                        <div ref={badgeRef} className="hero-status-pill">
                            <span className="pulsing-dot"></span>
                            <span>Zoho Tech Trainee &bull; Full Stack &bull; DevOps</span>
                        </div>

                        <div ref={titleRef} className="hero-headings">
                            <span className="hero-greeting">Hi, I'm</span>
                            <h1 className="hero-name">
                                <span className="gradient-text">Aswin Babu</span>
                            </h1>
                            <div className="hero-role-wrapper">
                                <span className="role-prefix">&gt; </span>
                                <span className="role-text">Software Engineer & DevOps Explorer</span>
                            </div>
                        </div>

                        <p ref={subtitleRef} className="hero-description">
                            Building scalable full stack applications and resilient DevOps workflows.
                            Passionate about Linux internals, eBPF telemetry, high-performance web systems, and modern AI pipelines.
                        </p>

                        <div ref={ctaRef} className="hero-actions">
                            <a href={resume} download="Aswin_Babu_Resume.pdf" className="btn-primary">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                </svg>
                                <span>Download Resume</span>
                            </a>
                            <a href={resume} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                                <span>View Resume</span>
                            </a>
                            <Link to="Projects" smooth={true} duration={500} offset={-80} className="btn-ghost">
                                <span>View Projects &rarr;</span>
                            </Link>
                        </div>
                    </div>

                    <div ref={terminalRef} className="hero-right">
                        <HeroTerminal />
                    </div>
                </div>

                <div ref={statsRef} className="hero-stats-bar glass-card">
                    <div className="stat-item">
                        <span className="stat-number">6+</span>
                        <span className="stat-label">Months @ Zoho Corp</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">6+</span>
                        <span className="stat-label">Production & ML Projects</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">12+</span>
                        <span className="stat-label">Core Tech Stacks</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Dedication to Scalability</span>
                    </div>
                </div>

                <div ref={aboutCardRef} className="about-me-container glass-card">
                    <div className="about-header">
                        <span className="section-badge">Background</span>
                        <h2 className="about-heading">About Me</h2>
                    </div>

                    <p className="about-bio">
                        Motivated and enthusiastic IT professional with 6 months of experience as a Technical Trainee at <strong>Zoho Corporation</strong>.
                        Experienced in Linux system administration, server monitoring. Possess hands-on exposure to eBPF, Linux system calls, Keepalived.
                        Passionate about both DevOps and full stack Development, with practical experience in Core Java, REST APIs, and web
                        application development. Familiar with Docker and Kubernetes concepts and actively expanding knowledge in modern
                        infrastructure, automation, and cloud technologies. Strong analytical and problem-solving skills with a keen interest in
                        building scalable and reliable systems.
                    </p>

                    <div className="about-pillars">
                        <div className="pillar-item">
                            <div className="pillar-icon devops">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                                    <line x1="6" y1="6" x2="6.01" y2="6"/>
                                    <line x1="6" y1="18" x2="6.01" y2="18"/>
                                </svg>
                            </div>
                            <h4>Linux & Systems DevOps</h4>
                            <p>eBPF packet hooks, Linux Syscalls, Keepalived, server monitoring, Docker containers & Kubernetes orchestration.</p>
                        </div>

                        <div className="pillar-item">
                            <div className="pillar-icon fullstack">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="16 18 22 12 16 6"/>
                                    <polyline points="8 6 2 12 8 18"/>
                                </svg>
                            </div>
                            <h4>Full Stack Engineering</h4>
                            <p>React.js, TypeScript, Core Java backend, RESTful APIs, SQL databases, and responsive modern architectures.</p>
                        </div>

                        <div className="pillar-item">
                            <div className="pillar-icon ai">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2a10 10 0 1 0 10 10H12V2z"/>
                                    <path d="M12 2a10 10 0 0 1 10 10"/>
                                    <path d="M12 12L2.5 7.5"/>
                                </svg>
                            </div>
                            <h4>AI & Automation</h4>
                            <p>LLM orchestration with LangGraph, Groq AI inference, semantic search embeddings, and predictive ML classification.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopContent;
