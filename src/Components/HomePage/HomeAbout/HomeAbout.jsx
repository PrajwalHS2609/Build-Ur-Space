import React from 'react'
import "./HomeAbout.css"
import AboutImg from './AboutImg'
import AboutHead from './AboutHead'
import AboutTxt from './AboutTxt'
import AboutPara from './AboutPara'
const HomeAbout = () => {
  return (
    <div className='aboutContainer'>
      <div className="aboutContent1">
        <AboutImg/>
      </div>
      <div className="aboutContent2">
        <AboutHead/>
        <AboutTxt/>
        <AboutPara/>
      </div>
    </div>
  )
}

export default HomeAbout
