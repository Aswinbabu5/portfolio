import React, { useState } from 'react'
import './Project.css'

const Project = ({ img, title, desc, link }) => {
    const [shown, setshown] = useState(false);

    return (
        <a href={link}>
            <div 
                onMouseEnter={() => setshown(true)} 
                onMouseLeave={() => setshown(false)} 
                className='project'
            >
                {
                    shown ? (
                        <div className='projectscreen'>
                            <h3>{title}</h3>
                            <p>{desc}</p>
                        </div>
                    ) : (
                        <img src={img} alt='' />
                    )
                }
            </div>
        </a>
    )
}

export default Project