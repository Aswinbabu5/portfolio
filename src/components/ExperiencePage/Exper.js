import React from 'react'
import './Exper.css'

const Exper = ({ logo, role, employer, desc, month }) => {
  return (
    <div className='exper'>
      <div className='company-logo'>
        <img src={logo} alt={employer} />
        <h3>{role}</h3>
      </div>
      <h4>{employer}</h4>
      <h5 className='month'>{month}</h5>
      <p>{desc}</p>
    </div>
  )
}

export default Exper