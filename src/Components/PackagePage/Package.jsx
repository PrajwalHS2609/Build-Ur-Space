import React from 'react'
import "./Package.css"
import Footer from '../Footer/Footer'
import PackageHead from './PackageHead'
import PackageMain from './PackageMain'
const Package = () => {
  return (
    <div className='packageContainer'>
        <PackageHead/>
        <PackageMain/>
      {/* <Footer/> */}
    </div>
  )
}

export default Package
