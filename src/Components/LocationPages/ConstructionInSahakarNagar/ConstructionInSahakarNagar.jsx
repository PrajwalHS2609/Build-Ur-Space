import React from 'react'
import { Helmet } from 'react-helmet'
import SahakarNagarHead from './SahakarNagarHead'
import ConstructionTypeMain from '../../Construction/ConstructionType/ConstructionTypeMain'
import ConstructionHead from '../../Construction/ConstructionHead'
import Portfolio from '../../Portfolio/Portfolio'
import PackageConstruction from '../../Construction/PackageConstruction'
import HomeAppPage from '../../HomePage/HomeAppPage/HomeAppPage'
import HomeWhy from '../../HomePage/HomeWhy/HomeWhy'
import Testimonial from '../../HomePage/Testimonial/Testimonial'
import SahakarNagarReadmore from './SahakarNagarReadmore';
import HomeConstructionImg from '../../HomePage/HomeImg/HomeConstructionImg'
import Partners from '../../HomePage/Partners/Partners'
import BrandWeUse from '../../HomePage/BrandWeUse/BrandWeUse'

const ConstructionInSahakarNagar = () => {
  return (
    <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>
      House Construction Company in Sahakar Nagar at Lowest Price Per.Sqft      </title>{" "}
      <meta
        name="description"
        content="House Construction Company in Sahakar Nagar can bring your vision to life with top-notch expertise, exceptional service, and a deep understanding of the local area’s construction needs. "
      />
      <link
        rel="canonical"
        href="https://buildurspace.com/house-construction-services-in-sahakar-nagar"
      />
    </Helmet>
    <ConstructionHead />
    <ConstructionTypeMain />
    <div className="locationWrapper">
      <SahakarNagarHead />
    </div>
    <Portfolio />
    <PackageConstruction />
    <HomeAppPage />
    <HomeWhy />
    <Testimonial />
    <BrandWeUse />
    <Partners />
    <HomeConstructionImg />
    <SahakarNagarReadmore />
  </div>
  )
}

export default ConstructionInSahakarNagar
