import React from 'react'
import { Helmet } from 'react-helmet'
import ConstructionHead from '../../Construction/ConstructionHead'
import ConstructionTypeMain from '../../Construction/ConstructionType/ConstructionTypeMain'
import Portfolio from '../../Portfolio/Portfolio'
import PackageConstruction from '../../Construction/PackageConstruction'
import HomeAppPage from '../../HomePage/HomeAppPage/HomeAppPage'
import HomeWhy from '../../HomePage/HomeWhy/HomeWhy'
import Testimonial from '../../HomePage/Testimonial/Testimonial'
import BrandWeUse from '../../HomePage/BrandWeUse/BrandWeUse'
import Partners from '../../HomePage/Partners/Partners'
import HomeConstructionImg from '../../HomePage/HomeImg/HomeConstructionImg'
import SinghanayakanaHalliHead from './SinghanayakanaHalliHead';
import SinghanayakanaHalliReadmore from './SinghanayakanaHalliReadmore'

const ConstructionInSinghanayakanaHalli = () => {
  return (
<div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          House Construction Company in Uttarhalli at Lowest Price Per.Sqft{" "}
        </title>{" "}
        <meta
          name="description"
          content="House Construction Company in Uttarhalli can bring your vision to life with top-notch expertise, exceptional service, and a deep understanding of the local area’s construction needs. "
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/house-construction-company-in-rr-nagar"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="locationWrapper">
        <SinghanayakanaHalliHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <SinghanayakanaHalliReadmore />
    </div>
  )
}

export default ConstructionInSinghanayakanaHalli
