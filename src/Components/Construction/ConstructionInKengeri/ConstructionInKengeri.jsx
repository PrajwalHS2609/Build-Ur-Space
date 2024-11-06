import React from 'react'
import { Helmet } from 'react-helmet'
import ConstructionHead from '../ConstructionHead'
import ConstructionTypeMain from '../ConstructionType/ConstructionTypeMain'
import KengeriHead from './KengeriHead';
import Portfolio from '../../Portfolio/Portfolio';
import PackageConstruction from '../PackageConstruction';
import HomeAppPage from '../../HomePage/HomeAppPage/HomeAppPage';
import HomeWhy from '../../HomePage/HomeWhy/HomeWhy';
import Testimonial from '../../HomePage/Testimonial/Testimonial';
import BrandWeUse from './../../HomePage/BrandWeUse/BrandWeUse';
import HomeConstructionImg from '../../HomePage/HomeImg/HomeConstructionImg';
import MagadiReadmore from '../ConstructionInMagadi.jsx/MagadiReadmore';
import Partners from '../../HomePage/Partners/Partners';

const ConstructionInKengeri = () => {
  return (
    <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>House Construction Company in Kengeri within Budget </title>
      <meta
        name="description"
        content="House Construction Company in Kengeri within Budget, we deliver top-notch services, guiding you through each step with expertise, transparency, and a focus on quality."
      />
      <link
        rel="canonical"
        href="https://buildurspace.com/house-construction-company-in-kengeri"
      />
    </Helmet>
    <ConstructionHead />
    <ConstructionTypeMain />
    <div className="ArchitectsWrapper">
      <KengeriHead />
    </div>
    <Portfolio />
    <PackageConstruction />
    <HomeAppPage />
    <HomeWhy />
    <Testimonial />
    <BrandWeUse/>
    <Partners />
    <HomeConstructionImg />
    <MagadiReadmore />
  </div>
  )
}

export default ConstructionInKengeri
