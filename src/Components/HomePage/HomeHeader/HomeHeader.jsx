import React from 'react'
import HomeHeaderImg from './HomeHeaderImg'
import HomeHeaderHead from './HomeHeaderHead'
import "./HomeHeader.css"
const HomeHeader = () => {
  return (
    <div className='homeHeaderContainer'>
      <HomeHeaderImg/>
      <HomeHeaderHead/>
    </div>
  )
}

export default HomeHeader
