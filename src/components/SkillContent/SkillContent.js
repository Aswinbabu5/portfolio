import React, { useState, useEffect, useRef } from 'react';
import './SkillContent.css';
import { Element } from 'react-scroll';
import skillimg from '../../assets/skills.jpg';
import { runWhenGSAPReady } from '../../utils/gsapHelper';

const SkillContent = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const skillsGridRef = useRef(null);

    const skills = [
        {
            name: "Linux Systems & Administration",
            category: "devops",
            level: 70,
            tag: "Ubuntu, Debian, Syscalls, eBPF",
            icon: "🐧",
            color: "#6366f1"
        },
        {
            name: "Networking & System Hooks",
            category: "devops",
            level: 80,
            tag: "TCP/IP, Packet Pass, eBPF, Keepalived",
            icon: "🌐",
            color: "#10b981"
        },
        {
            name: "SQL & Relational Databases",
            category: "fullstack",
            level: 90,
            tag: "PostgreSQL, MySQL, Schema Design",
            icon: "🗄️",
            color: "#7c3aed"
        },
        {
            name: "HTML, CSS, JavaScript, React.js",
            category: "fullstack",
            level: 80,
            tag: "Frontend, Responsive UI, React Hooks",
            icon: "⚛️",
            color: "#38bdf8"
        },
        {
            name: "C / C++",
            category: "fullstack",
            level: 80,
            tag: "Low-level Systems, Memory Management",
            icon: "⚙️",
            color: "#6366f1"
        },
        {
            name: "Core Java",
            category: "fullstack",
            level: 70,
            tag: "OOP, Multithreading, REST APIs",
            icon: "☕",
            color: "#f59e0b"
        },
        {
            name: "Python",
            category: "ai",
            level: 70,
            tag: "Automation, Data Processing, ML",
            icon: "🐍",
            color: "#3b82f6"
        },
        {
            name: "LLM, Semantic Search, Embedding, Gen-AI",
            category: "ai",
            level: 70,
            tag: "LangGraph, Groq, Vector Embeddings",
            icon: "🤖",
            color: "#10b981"
        },
        {
            name: "Docker & Containerization",
            category: "devops",
            level: 50,
            tag: "Images, Container Lifecycle, Dockerfiles",
            icon: "🐳",
            color: "#06b6d4"
        },
        {
            name: "Kubernetes",
            category: "devops",
            level: 50,
            tag: "Pods, Services, Deployments, Orchestration",
            icon: "☸️",
            color: "#3b82f6"
        },
        {
            name: "CI / CD Pipelines",
            category: "devops",
            level: 60,
            tag: "GitHub Actions, Automation, Delivery",
            icon: "🔄",
            color: "#8b5cf6"
        }
    ];

    const filteredSkills = selectedCategory === 'all' ? skills : skills.filter(s => s.category === selectedCategory);

    useEffect(() => {
        runWhenGSAPReady((gsap) => {
            if (window.ScrollTrigger && skillsGridRef.current) {
                gsap.fromTo(skillsGridRef.current.children,
                    { opacity: 0, y: 25, scale: 0.96 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.5,
                        stagger: 0.06,
                        scrollTrigger: {
                            trigger: skillsGridRef.current,
                            start: 'top 85%',
                        }
                    }
                );
            }
        });
    }, [selectedCategory]);

    return (
        <Element name="Skills" className="skills-section">
            <div className="content-wrapper">
                <div className="section-header">
                    <span className="section-badge">Capabilities</span>
                    <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
                    <p className="section-subtitle">
                        Proficiencies spanning Linux kernel hooks, DevOps automation, full stack web development, and AI integration.
                    </p>
                </div>

                <div className="skills-featured-banner glass-card">
                    <div className="skills-img-wrapper">
                        <img src={skillimg} alt="Aswin Babu Technical Skills" className="skills-img" />
                        <div className="skills-img-glow"></div>
                    </div>
                    <div className="skills-banner-info">
                        <h3>Hands-on Systems & Software Mastery</h3>
                        <p>
                            Combining low-level systems knowledge gained at Zoho Corporation with modern full-stack web and cloud frameworks.
                            Continuously expanding into scalable cloud infrastructure, eBPF packet processing, and AI workflows.
                        </p>
                        <div className="skills-highlight-chips">
                            <span className="chip">⚡ Linux Syscalls</span>
                            <span className="chip">🌐 eBPF Packet Hooks</span>
                            <span className="chip">🐳 Docker & K8s</span>
                            <span className="chip">💻 React & Java</span>
                            <span className="chip">🧠 Gen-AI & LLMs</span>
                        </div>
                    </div>
                </div>

                <div className="skills-filter-tabs">
                    <button className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`} onClick={() => setSelectedCategory('all')}>
                        All Capabilities ({skills.length})
                    </button>
                    <button className={`filter-btn ${selectedCategory === 'devops' ? 'active' : ''}`} onClick={() => setSelectedCategory('devops')}>
                        DevOps & Systems
                    </button>
                    <button className={`filter-btn ${selectedCategory === 'fullstack' ? 'active' : ''}`} onClick={() => setSelectedCategory('fullstack')}>
                        Full Stack & Core
                    </button>
                    <button className={`filter-btn ${selectedCategory === 'ai' ? 'active' : ''}`} onClick={() => setSelectedCategory('ai')}>
                        AI & Modern Data
                    </button>
                </div>

                <div ref={skillsGridRef} className="skills-grid">
                    {
                        filteredSkills.map((skill, index) => (
                            <div key={index} className="skill-card glass-card">
                                <div className="skill-card-top">
                                    <div className="skill-icon-badge" style={{ borderColor: `${skill.color}40`, background: `${skill.color}15` }}>
                                        <span>{skill.icon}</span>
                                    </div>
                                    <span className="skill-level-pill" style={{ color: skill.color, borderColor: `${skill.color}40` }}>
                                        {skill.level}%
                                    </span>
                                </div>

                                <h4 className="skill-card-name">{skill.name}</h4>
                                <span className="skill-card-tag">{skill.tag}</span>

                                <div className="skill-meter-bg">
                                    <div className="skill-meter-fill" style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, ${skill.color}, #a855f7)`, boxShadow: `0 0 12px ${skill.color}80` }} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Element>
    );
};

export default SkillContent;
