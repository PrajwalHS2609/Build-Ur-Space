import React from 'react'
import "./HomeServices.css"
import HomeServicesMain from './HomeServicesMain'
import HomeServiceHeader from './HomeServiceHeader'
const HomeServices = () => {
  return (
    <div className='homeServiceContainer'>
      <HomeServiceHeader/>
      <HomeServicesMain/>
    </div>
  )
}

export default HomeServices
