import React from 'react'
import { Helmet } from 'react-helmet'
import ConstructionHead from '../ConstructionHead'
import ConstructionTypeMain from '../ConstructionType/ConstructionTypeMain'
import Portfolio from '../../Portfolio/Portfolio'
import PackageConstruction from '../PackageConstruction'
import HomeAppPage from '../../HomePage/HomeAppPage/HomeAppPage'
import HomeWhy from '../../HomePage/HomeWhy/HomeWhy'
import Testimonial from '../../HomePage/Testimonial/Testimonial'
import BrandWeUse from '../../HomePage/BrandWeUse/BrandWeUse'
import Partners from '../../HomePage/Partners/Partners'
import HomeConstructionImg from '../../HomePage/HomeImg/HomeConstructionImg'
import Footer from '../../Footer/Footer'
import BudgetHead from './BudgetHead';
import BudgetReadmore from './BudgetReadmore';

const ConstructionBudget = () => {
  return (
    <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>
      Budget Homes Construction in Bangalore | Budget House Construction in Bangalore
      </title>
      <meta
        name="description"
        content="Budget Homes Construction in Bangalore. At Build Ur Space, we specialize in constructing budget homes that don't compromise on quality, comfort, or style."
      />
      <link
        rel="canonical"
        href="https://buildurspace.com/budget-homes-construction-in-bangalore"
      />
    </Helmet>
    <ConstructionHead />
    <ConstructionTypeMain />
    <div className="ArchitectsWrapper">
      <BudgetHead />
    </div>
    <Portfolio />
    <PackageConstruction />
    <HomeAppPage />
    <HomeWhy />
    <Testimonial />
    <BrandWeUse />
    <Partners />
    <HomeConstructionImg />
    <BudgetReadmore/>
    <Footer />
  </div>
  )
}

export default ConstructionBudget
