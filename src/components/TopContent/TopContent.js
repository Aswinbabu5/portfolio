import React from 'react'
import './TopContent.css'
import resume from '../../assets//aswinbabu_resume.pdf'

const TopContent = () => {
    return (
        <div className='topcontent'>
            <div className='topcontent_right_container'>
                <h2>I'm</h2>
                <h1>aswin babu</h1>
                <p>building scalable full stack application and devOps workflows</p>
                <a href={resume} download={resume}>
                    <button className='topcontent_download_btn'>download resume</button>
                </a>
                <a href={resume} target='_blank' rel='noopener noreferrer'>
                    <button className='topcontent__btn'>View resume</button>
                </a>
            </div>
            <div className='topcontent_left_container'>
                <h2>about me</h2>
                <p>Motivated and enthusiastic IT professional with 6 months of experience as a Technical Trainee at Zoho Corporation.
                    Experienced in Linux system administration, server monitoring. Possess hands-on exposure to eBPF, Linux system calls, Keepalived.
                    Passionate about both DevOps and full stack Development, with practical experience in Core Java, REST APIs, and web
                    application development. Familiar with Docker and Kubernetes concepts and actively expanding knowledge in modern
                    infrastructure, automation, and cloud technologies. Strong analytical and problem-solving skills with a keen interest in
                    building scalable and reliable systems.</p>
            </div>
        </div>
    )
}

export default TopContent