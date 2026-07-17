import React from 'react'
import '../../assets//plant_diseases.jpg'
import { Element } from 'react-scroll'
import Project from '../Project/project';
import './ProjectContent.css'

const ProjectContent = () => {
    const projects = [
        {
            img: "https://img.magnific.com/free-vector/student-studying-using-laptop-desk_1262-21426.jpg?semt=ais_hybrid&w=740&q=80",
            title: "Student Management System",
            desc: "Designed and implemented CRUD (Create, Read, Update, Delete) operations for student records. Implemented input validation and exception handling for reliable data management.",
            link: ""
        },
        {
            img: "https://backiee.com/static/wallpapers/1000x563/151670.jpg",
            title: "Development Collaboration Dashboard",
            desc: "Designed and implemented CRUD (Create, Read, Update, Delete) operations for student records. Implemented input validation and exception handling for reliable data management.",
            link: ""
        },
        {
            img: "/Users/ashwin/Desktop/HTML-PROJECT/aswin-portfolio/my-website/src/assets/plant_diseases.jpg",
            title: "Plant Disease Classificaton",
            desc: "Built an image-based plant disease detection model using machine learning techniques. Trained the model on labelled leaf images to classify disease categories and healthy plants also download the .csv type file and see the types.",
            link: "https://plantdisease-qi5qkhglmnllj4encmfmcz.streamlit.app"
        },
        {
            img: "https://i0.wp.com/aurassure.com/wp-content/uploads/2024/05/Air-Quality-Monitoring-Page.webp?fit=2232%2C900&ssl=1",
            title: "Smart Air Quality Monitoring for asthma patients",
            desc: "Developed an ML-powered air quality monitoring system that continuously monitors indoor and outdoor air quality conditions for asthma patients.",
            link: ""
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