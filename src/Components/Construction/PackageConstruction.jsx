import React from 'react'
import "../PackagePage/Package.css"
import PackageDisplay from '../PackagePage/PackageDisplay'
import PackageConstructionMenu from './PackageConstructionMenu'

const PackageConstruction = () => {
  return (
    <div className="packageMainContainer">
        <PackageConstructionMenu/>
      <PackageDisplay/>
    </div>
  )
}

export default PackageConstruction
