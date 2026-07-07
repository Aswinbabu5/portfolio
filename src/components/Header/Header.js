import React from 'react'
import "./Header.css"
import { Link } from 'react-scroll'

const Header = () => {
    return (
        <div className='header'>
            <div className='Left-side-header'>
                <h2><span>software</span> engineer</h2>
                <h5>full stack developer | devOps engineer</h5>
            </div>
            <div className='Right-side-header'>
                <Link to='About' smooth={true} duration={500}>
                    <h4>about</h4>
                </Link>
                <Link to='Skills' smooth={true} duration={500}>
                    <h4>skills</h4>
                </Link>
                <Link to='Projects' smooth={true} duration={500}>
                    <h4>projects</h4>
                </Link>
                <Link to='exper' smooth={true} duration={500}>
                    <h4>experiences</h4>
                </Link>
                <Link to='contact' smooth={true} duration={500}>
                    <h4>contact</h4>
                </Link>
            </div>
        </div>
    )
}

export default Header