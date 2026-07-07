import React from 'react'
import './SkillContent.css'
import { Element } from 'react-scroll'
import skillimg from '../../assets/skills.jpg'
import LinearProgress from '@mui/material/LinearProgress'

const SkillContent = () => {
    return (
        <Element name='Skills' className='skill_container'>
            <div className='skillcontent__img'>
                <img src={skillimg} alt='' />
            </div>
            <div className='skillcontent_text'>
                <h2>Technical Skills</h2>
                <div className='skillcontent_set'>
                    <h5>html, css, javascript, react.js</h5>
                    <div className='skillcontent_slider skillcontent_slider1'>
                        <LinearProgress variant='determinate' value={70}/>
                    </div>
                </div>
                <div className='skillcontent_set'>
                    <h5>core java</h5>
                    <div className='skillcontent_slider skillcontent_slider2'>
                        <LinearProgress variant='determinate' value={60}/>
                    </div>
                </div>
                <div className='skillcontent_set'>
                    <h5>python</h5>
                    <div className='skillcontent_slider skillcontent_slider3'>
                        <LinearProgress variant='determinate' value={50}/>
                    </div>
                </div>
                <div className='skillcontent_set'>
                    <h5>sql</h5>
                    <div className='skillcontent_slider skillcontent_slider4'>
                        <LinearProgress variant='determinate' value={90}/>
                    </div>
                </div>
                <div className='skillcontent_set'>
                    <h5>docker</h5>
                    <div className='skillcontent_slider skillcontent_slider5'>
                        <LinearProgress variant='determinate' value={40}/>
                    </div>
                </div>
                <div className='skillcontent_set'>
                    <h5>kubernetes</h5>
                    <div className='skillcontent_slider skillcontent_slider6'>
                        <LinearProgress variant='determinate' value={40}/>
                    </div>
                </div>
                <div className='skillcontent_set'>
                    <h5>linux</h5>
                    <div className='skillcontent_slider skillcontent_slider7'>
                        <LinearProgress variant='determinate' value={70}/>
                    </div>
                </div>
                <div className='skillcontent_set'>
                    <h5>networking</h5>
                    <div className='skillcontent_slider skillcontent_slider8'>
                        <LinearProgress variant='determinate' value={80}/>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default SkillContent