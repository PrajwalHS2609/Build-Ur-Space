import React from 'react'
import { Outlet } from 'react-router-dom'

const PackageDisplay = () => {
  return (
    <div className='packageDisplayContainer'>
      <Outlet/>
    </div>
  )
}

export default PackageDisplay
