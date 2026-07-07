import React from 'react'
import './ExperContent.css'
import { Element } from 'react-scroll'
import Exper from '../ExperiencePage/Exper'

const ExperContent = () => {
    const exper = [
        {
            logo: "https://i.pinimg.com/736x/ad/d8/dc/add8dc1359dbece041e40456660101dc.jpg",
            role: "Internship",
            employer: "Zoho Corporation Private Limited",
            desc:
                <ul>
                    <li>Implemented the packet pass using the eBPF hook and direct forward the packet into their machine.</li>
                    <li>Understand about linux syscall and implemented the basic task.</li>
                    <li>Perform and assist the file handling process using the syscall and manage their count</li>
                </ul>,
            month: "July 2025 - August 2025"
        },
        {
            logo: "https://i.pinimg.com/736x/ad/d8/dc/add8dc1359dbece041e40456660101dc.jpg",
            role: "Technical Trainee",
            employer: "Zoho Corporation Private Limited",
            desc:
                <ul>
                    <li>Monitored and maintained production servers to ensure system availability and reliability.</li>
                    <li>Worked with Linux-based environments including Ubuntu and Debian.</li>
                    <li>Explored eBPF and Linux system calls for system-level monitoring and performance analysis.</li>
                </ul>,
            month: "September 2025 - March 2026"
        }
    ]
    return (
        <Element id='exper' className='expercon'>
            <h1>Experience</h1>
            <div className='experfile'>
                {
                    exper.map((experi, index) => {
                        return (
                            <Exper key={index} logo={experi.logo} role={experi.role} employer={experi.employer} month={experi.month} desc={experi.desc} />
                        )
                    })
                }
            </div>
        </Element>
    )
}

export default ExperContent