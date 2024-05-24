import React from 'react'
import "./Footer.css"
import BioFooter from './BioFooter'
const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className="footerContent" id='BioFooter'>
<BioFooter/>
      </div>
      <div className="footerContent" ></div>
      <div className="footerContent"></div>
      <div className="footerContent"></div>
    </div>
  )
}

export default Footer
