import React, { useState, useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import Project from '../Project/project';
import './ProjectContent.css';
import plantdiseases from '../../assets/plant_diseases.jpg';
import crmhcp from '../../assets/crm_hcp.png';
import devdash from '../../assets/DevDash.png';
import airquality from '../../assets/smart-air-quality.png';
import jublie from '../../assets/Jublie.png';
import incidenthub from '../../assets/incidenthub.png';
import { runWhenGSAPReady } from '../../utils/gsapHelper';

const ProjectContent = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const projectsGridRef = useRef(null);

    const projects = [
        {
            img: jublie,
            title: "Jublie - The Judicial Assistant",
            desc: "Developed an ML-powered automation pipeline in Python to assist users in retrieving and analyzing legal case records, demonstrating data processing and backend scripting capabilities.",
            link: "https://jublie.streamlit.app",
            github: "https://github.com/Aswinbabu5/jublie",
            tags: ["Python", "Streamlit", "Machine Learning", "Legal AI", "Data Processing"],
            badge: "ML Automation",
            category: "ai"
        },
        {
            img: devdash,
            title: "Development Collaboration Dashboard",
            desc: "A modern frontend project management dashboard developed using React and TypeScript, featuring project tracking, Kanban boards, analytics, notifications, responsive design, and Local Storage-based data persistence.",
            link: "https://developer-dashboard-tan.vercel.app",
            github: "https://github.com/Aswinbabu5/Developer-Dashboard",
            tags: ["React.js", "TypeScript", "Kanban", "Analytics", "Vercel"],
            badge: "Full Stack UI",
            category: "fullstack"
        },
        {
            img: crmhcp,
            title: "AI-First CRM HCP",
            desc: "Built a full-stack AI-powered CRM application that enables medical representatives to log, manage, and summarize HCP interactions using natural language. Integrated LangGraph with Groq LLM to automate interaction logging and editing recommendations.",
            link: "https://ai-first-crm-hcp-mauve.vercel.app",
            github: "https://github.com/Aswinbabu5/AI-First-CRM-HCP",
            tags: ["LangGraph", "Groq LLM", "Gen-AI", "React", "REST API"],
            badge: "Agentic AI",
            category: "ai"
        },
        {
            img: incidenthub,
            title: "Incident_Hub",
            desc: "IncidentHub is a full-stack MERN incident management platform with role-based access, incident tracking, assignment, and SLA monitoring for mission-critical enterprise workflows.",
            link: "https://incidend-hub.vercel.app",
            github: "https://github.com/Aswinbabu5/incidendHub",
            tags: ["MongoDB", "Express.js", "React.js", "Node.js", "SLA Monitoring"],
            badge: "MERN Stack",
            category: "fullstack"
        },
        {
            img: airquality,
            title: "Smart Air Quality Monitoring for Asthma Patients",
            desc: "Developed an ML-powered air quality monitoring system that continuously monitors indoor and outdoor air quality conditions for asthma patients with predictive health alerts.",
            link: "https://github.com/Aswinbabu5/asthma_guard",
            github: "https://github.com/Aswinbabu5/asthma_guard",
            tags: ["IoT / Sensors", "Python", "ML Prediction", "Healthcare Tech"],
            badge: "IoT & ML",
            category: "systems"
        },
        {
            img: plantdiseases,
            title: "Plant Disease Classification",
            desc: "Built an image-based plant disease detection model using machine learning techniques. Trained the model on labelled leaf images to classify disease categories and healthy plants with downloadable CSV reports.",
            link: "https://plantdisease-qi5qkhglmnllj4encmfmcz.streamlit.app",
            github: "https://github.com/Aswinbabu5/plant_disease",
            tags: ["Computer Vision", "Machine Learning", "Streamlit", "Python"],
            badge: "Computer Vision",
            category: "ai"
        }
    ];

    const filteredProjects = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

    useEffect(() => {
        runWhenGSAPReady((gsap) => {
            if (window.ScrollTrigger && projectsGridRef.current) {
                gsap.fromTo(projectsGridRef.current.children,
                    { opacity: 0, y: 30, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        stagger: 0.08,
                        scrollTrigger: {
                            trigger: projectsGridRef.current,
                            start: 'top 85%',
                        }
                    }
                );
            }
        });
    }, [activeFilter]);

    return (
        <Element name="Projects" className="projects-section">
            <div className="content-wrapper">
                <div className="section-header">
                    <span className="section-badge">Portfolio</span>
                    <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                    <p className="section-subtitle">
                        Production applications, AI agent systems, ML classification models, and collaborative developer platforms.
                    </p>
                </div>

                <div className="projects-filter-bar">
                    <button className={`filter-pill ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>
                        All Work ({projects.length})
                    </button>
                    <button className={`filter-pill ${activeFilter === 'ai' ? 'active' : ''}`} onClick={() => setActiveFilter('ai')}>
                        AI & Machine Learning
                    </button>
                    <button className={`filter-pill ${activeFilter === 'fullstack' ? 'active' : ''}`} onClick={() => setActiveFilter('fullstack')}>
                        Full Stack & Dashboards
                    </button>
                    <button className={`filter-pill ${activeFilter === 'systems' ? 'active' : ''}`} onClick={() => setActiveFilter('systems')}>
                        Systems & IoT
                    </button>
                </div>

                <div ref={projectsGridRef} className="projects-grid">
                    {
                        filteredProjects.map((project, index) => (
                            <Project
                                key={index}
                                img={project.img}
                                title={project.title}
                                desc={project.desc}
                                link={project.link}
                                github={project.github}
                                tags={project.tags}
                                badge={project.badge}
                            />
                        ))
                    }
                </div>
            </div>
        </Element>
    );
};

export default ProjectContent;
