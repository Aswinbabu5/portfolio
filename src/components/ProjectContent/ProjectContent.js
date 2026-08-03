import React from 'react'
import { Element } from 'react-scroll'
import Project from '../Project/project';
import './ProjectContent.css'
import plantdiseases from '../../assets/plant_diseases.jpg'
import crmhcp from '../../assets/crm_hcp.png'
import devdash from '../../assets/DevDash.png'
import airquality from '../../assets/smart-air-quality.png'

const ProjectContent = () => {
    const projects = [
        {
            img: "https://img.magnific.com/free-vector/student-studying-using-laptop-desk_1262-21426.jpg?semt=ais_hybrid&w=740&q=80",
            title: "Student Management System",
            desc: "Designed and implemented CRUD (Create, Read, Update, Delete) operations for student records. Implemented input validation and exception handling for reliable data management.",
            link: ""
        },
        {
            img: devdash,
            title: "Development Collaboration Dashboard",
            desc: "A modern frontend project management dashboard developed using React and TypeScript, featuring project tracking, Kanban boards, analytics, notifications, responsive design, and Local Storage-based data persistence.",
            link: "https://developer-dashboard-tan.vercel.app"
        },
        {
            img: plantdiseases,
            title: "Plant Disease Classificaton",
            desc: "Built an image-based plant disease detection model using machine learning techniques. Trained the model on labelled leaf images to classify disease categories and healthy plants also download the .csv type file and see the types.",
            link: "https://plantdisease-qi5qkhglmnllj4encmfmcz.streamlit.app"
        },
        {
            img: airquality,
            title: "Smart Air Quality Monitoring for asthma patients",
            desc: "Developed an ML-powered air quality monitoring system that continuously monitors indoor and outdoor air quality conditions for asthma patients.",
            link: "https://github.com/Aswinbabu5/asthma_guard"
        },
        {
            img: crmhcp,
            title: "AI-First CRM HCP",
            desc: "Built a full-stack AI-powered CRM application that enables medical representatives to log, manage, and summarize HCP interactions using natural language. Integrated a LangGraph with Groq LLM to automate interaction logging, editing recommendations.",
            link: "https://ai-first-crm-hcp-mauve.vercel.app"
        }

    ];

    return (
        <Element name='Projects' className='projectcontent'>
            <h2>projects</h2>
            <p>Here are my some projects which I done for making easy</p>
            <div className='projectcontent_project'>
                {
                    projects.map((project, index) => {
                        return (
                            <Project 
                                key={index} 
                                img={project.img} 
                                title={project.title} 
                                desc={project.desc} 
                                link={project.link} 
                            />
                        )
                    })
                }
            </div>
        </Element>
    )
}

export default ProjectContent