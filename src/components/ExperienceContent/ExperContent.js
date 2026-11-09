import React, { useEffect, useRef } from 'react';
import './ExperContent.css';
import { Element } from 'react-scroll';
import Exper from '../ExperiencePage/Exper';
import { runWhenGSAPReady } from '../../utils/gsapHelper';

const ExperContent = () => {
    const timelineRef = useRef(null);

    const experiences = [
        {
            logo: "https://i.pinimg.com/736x/ad/d8/dc/add8dc1359dbece041e40456660101dc.jpg",
            role: "Technical Trainee",
            employer: "Zoho Corporation Private Limited",
            month: "September 2025 - March 2026",
            tags: ["Linux (Debian/Ubuntu)", "Server Monitoring", "eBPF", "System Calls", "Infrastructure Reliability"],
            desc: (
                <ul>
                    <li>Monitored and maintained production servers to guarantee high availability, zero latency spikes, and reliable operations.</li>
                    <li>Worked actively with enterprise Linux-based distributions including Ubuntu and Debian server environments.</li>
                    <li>Explored and applied eBPF programs and Linux system calls for low-overhead kernel-level monitoring and performance telemetry.</li>
                </ul>
            )
        },
        {
            logo: "https://i.pinimg.com/736x/ad/d8/dc/add8dc1359dbece041e40456660101dc.jpg",
            role: "Software Engineering Intern",
            employer: "Zoho Corporation Private Limited",
            month: "July 2025 - August 2025",
            tags: ["eBPF XDP Hooks", "Packet Forwarding", "Linux Syscalls", "File Handling", "C / Kernel API"],
            desc: (
                <ul>
                    <li>Implemented high-speed packet pass mechanisms utilizing eBPF network hooks to directly forward incoming packets to target host machines.</li>
                    <li>Deep-dived into core Linux system calls, tracing system behavior and implementing critical low-level automation tasks.</li>
                    <li>Developed and assisted in the file handling architecture using kernel syscalls and accurately monitored process-level I/O counts.</li>
                </ul>
            )
        }
    ];

    useEffect(() => {
        runWhenGSAPReady((gsap) => {
            if (window.ScrollTrigger && timelineRef.current) {
                gsap.fromTo(timelineRef.current.querySelectorAll('.modern-experience-item'),
                    { opacity: 0, x: -30 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.7,
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: timelineRef.current,
                            start: 'top 80%',
                        }
                    }
                );
            }
        });
    }, []);

    return (
        <Element id="exper" name="exper" className="experience-section">
            <div className="content-wrapper">
                <div className="section-header">
                    <span className="section-badge">Career Journey</span>
                    <h2 className="section-title">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="section-subtitle">
                        Hands-on production engineering at Zoho Corporation focusing on Linux systems, server reliability, and eBPF kernel hooks.
                    </p>
                </div>

                <div ref={timelineRef} className="timeline-container">
                    <div className="timeline-vertical-line"></div>
                    {
                        experiences.map((exp, index) => (
                            <Exper
                                key={index}
                                logo={exp.logo}
                                role={exp.role}
                                employer={exp.employer}
                                month={exp.month}
                                desc={exp.desc}
                                tags={exp.tags}
                            />
                        ))
                    }
                </div>
            </div>
        </Element>
    );
};

export default ExperContent;
