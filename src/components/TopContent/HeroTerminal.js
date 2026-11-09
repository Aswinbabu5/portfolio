import React, { useState } from 'react';
import './HeroTerminal.css';

const HeroTerminal = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [copied, setCopied] = useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="hero-terminal-card glass-card">
            <div className="terminal-header">
                <div className="terminal-controls">
                    <span className="control-btn close"></span>
                    <span className="control-btn minimize"></span>
                    <span className="control-btn maximize"></span>
                </div>
                <div className="terminal-title">aswin@zoho-workstation: ~ (zsh)</div>
                <div className="terminal-tabs">
                    <button className={`terminal-tab-btn ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
                        profile.sh
                    </button>
                    <button className={`terminal-tab-btn ${activeTab === 'systems' ? 'active' : ''}`} onClick={() => setActiveTab('systems')}>
                        ebpf_sys.c
                    </button>
                    <button className={`terminal-tab-btn ${activeTab === 'stack' ? 'active' : ''}`} onClick={() => setActiveTab('stack')}>
                        stack.json
                    </button>
                </div>
            </div>

            <div className="terminal-body font-code">
                {
                    activeTab === 'profile' && (
                        <div className="terminal-screen-content">
                            <div className="terminal-line">
                                <span className="prompt-path">~/portfolio</span> <span className="prompt-git">(main)</span> <span className="prompt-symbol">$</span> <span className="command">whoami && ./status.sh</span>
                            </div>
                            <div className="terminal-output">
                                <div className="out-row"><span className="out-key">NAME:</span> <span className="out-val">Aswin Babu</span></div>
                                <div className="out-row"><span className="out-key">ROLE:</span> <span className="out-val">Full Stack Developer & DevOps Engineer</span></div>
                                <div className="out-row"><span className="out-key">EXPERIENCE:</span> <span className="out-val-highlight">6 Months @ Zoho Corporation</span></div>
                                <div className="out-row"><span className="out-key">FOCUS:</span> <span className="out-val">eBPF, Linux Syscalls, Server Ops, Java, React, LLMs</span></div>
                                <div className="out-row"><span className="out-key">STATUS:</span> <span className="out-val-badge">🟢 Available for Next Opportunities</span></div>
                            </div>
                            <div className="terminal-line prompt-next">
                                <span className="prompt-path">~/portfolio</span> <span className="prompt-symbol">$</span> <span className="cursor-caret"></span>
                            </div>
                        </div>
                    )
                }

                {
                    activeTab === 'systems' && (
                        <div className="terminal-screen-content">
                            <div className="terminal-line">
                                <span className="prompt-path">~/zoho/ebpf</span> <span className="prompt-symbol">$</span> <span className="command">cat ebpf_packet_filter.c</span>
                            </div>
                            <div className="terminal-output code-block">
                                <span className="code-comment">{'// eBPF Hook & Linux Syscall Handler'}</span><br />
                                <span className="code-keyword">#include</span> &lt;linux/bpf.h&gt;<br />
                                <span className="code-keyword">#include</span> &lt;bpf/bpf_helpers.h&gt;<br />
                                <br />
                                <span className="code-func">SEC</span>(<span className="code-str">"xdp/packet_pass"</span>)<br />
                                <span className="code-type">int</span> <span className="code-func">packet_forwarder</span>(<span className="code-type">struct</span> xdp_md *ctx) &#123;<br />
                                &nbsp;&nbsp;<span className="code-comment">{'// High-performance packet redirect & syscall trace'}</span><br />
                                &nbsp;&nbsp;<span className="code-keyword">return</span> XDP_PASS;<br />
                                &#125;
                            </div>
                            <div className="terminal-line prompt-next">
                                <span className="prompt-path">~/zoho/ebpf</span> <span className="prompt-symbol">$</span> <span className="cursor-caret"></span>
                            </div>
                        </div>
                    )
                }

                {
                    activeTab === 'stack' && (
                        <div className="terminal-screen-content">
                            <div className="terminal-line">
                                <span className="prompt-path">~/configs</span> <span className="prompt-symbol">$</span> <span className="command">jq .technologies package.json</span>
                            </div>
                            <div className="terminal-output code-block">
                                &#123;<br />
                                &nbsp;&nbsp;<span className="out-key">"systems"</span>: [<span className="code-str">"Linux"</span>, <span className="code-str">"eBPF"</span>, <span className="code-str">"Syscalls"</span>, <span className="code-str">"Keepalived"</span>],<br />
                                &nbsp;&nbsp;<span className="out-key">"devops"</span>: [<span className="code-str">"Docker"</span>, <span className="code-str">"Kubernetes"</span>, <span className="code-str">"CI/CD"</span>],<br />
                                &nbsp;&nbsp;<span className="out-key">"fullstack"</span>: [<span className="code-str">"Java"</span>, <span className="code-str">"React.js"</span>, <span className="code-str">"TypeScript"</span>, <span className="code-str">"Node.js"</span>, <span className="code-str">"SQL"</span>],<br />
                                &nbsp;&nbsp;<span className="out-key">"ai_ml"</span>: [<span className="code-str">"LLM"</span>, <span className="code-str">"LangGraph"</span>, <span className="code-str">"Embeddings"</span>, <span className="code-str">"Streamlit"</span>]<br />
                                &#125;
                            </div>
                            <div className="terminal-line prompt-next">
                                <span className="prompt-path">~/configs</span> <span className="prompt-symbol">$</span> <span className="cursor-caret"></span>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className="terminal-footer">
                <span className="footer-label">Quick Copy:</span>
                <button className="quick-copy-chip" onClick={() => handleCopy('ashwinbabu769@gmail.com')}>
                    {copied ? '✓ Copied Email!' : 'ashwinbabu769@gmail.com'}
                </button>
            </div>
        </div>
    );
};

export default HeroTerminal;

