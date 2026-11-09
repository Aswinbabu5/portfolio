import React from 'react';
import './Exper.css';

const Exper = ({ logo, role, employer, desc, month, tags }) => {
    return (
        <div className="modern-experience-item">
            <div className="timeline-node">
                <div className="node-outer-ring">
                    <div className="node-inner-dot"></div>
                </div>
            </div>

            <div className="experience-card glass-card">
                <div className="exp-card-header">
                    <div className="company-info-group">
                        <div className="company-logo-frame">
                            <img src={logo} alt={employer} />
                        </div>
                        <div>
                            <div className="role-and-badge">
                                <h3 className="exp-role">{role}</h3>
                                <span className="exp-badge">Zoho Corp</span>
                            </div>
                            <h4 className="exp-employer">{employer}</h4>
                        </div>
                    </div>
                    <div className="exp-duration-pill">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        <span>{month}</span>
                    </div>
                </div>

                <div className="exp-desc-container">{desc}</div>

                {
                    tags && (
                        <div className="exp-tags-row">
                            {
                            tags.map((t, idx) => (
                                <span key={idx} className="exp-tag-pill">{t}</span>
                            ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Exper;
