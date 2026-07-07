import React from 'react'
import {Element} from 'react-scroll'
import './BodyContainer.css'
import TopContent from '../TopContent/TopContent'

const BodyContainer = () => {
  return (
    <Element name='About' className='Body-container'>
        <TopContent />
    </Element>
  )
}

export default BodyContainer