import React from 'react'
import './Contact.css'
import { Element } from 'react-scroll'
import IconButton from '@mui/material/IconButton'
import { LinkedIn, GitHub } from '@mui/icons-material'

const Contact = () => {
    return (
        <Element id='contact' className='contact'>
            <h1>Contact</h1>
            <div className='contact-content'>
                <p>
                    Gmail : <span>ashwinbabu769@gmail.com</span>
                </p>
                <p>
                    GitHub : <span>@Aswinbabu5</span>
                </p>
                <p>
                    phone : <span>+919342489851</span>
                </p>
                <div className='contact_icon'>
                    <a href='https://www.linkedin.com/in/aswin-babu-3baab235a/'>
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                    </a>
                    <a href='https://github.com/Aswinbabu5'>
                        <IconButton>
                            <GitHub />
                        </IconButton>
                    </a>
                </div>
            </div>
        </Element>
    )
}

export default Contact