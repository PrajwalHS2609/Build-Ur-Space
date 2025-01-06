import React from 'react'
import { Helmet } from 'react-helmet'
import ConstructionHead from "../../Construction/ConstructionHead";
import ConstructionTypeMain from "../../Construction/ConstructionType/ConstructionTypeMain";
import Portfolio from "../../Portfolio/Portfolio";
import PackageConstruction from "../../Construction/PackageConstruction";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import BrandWeUse from "../../HomePage/BrandWeUse/BrandWeUse";
import Partners from "../../HomePage/Partners/Partners";
import HomeConstructionImg from "../../HomePage/HomeImg/HomeConstructionImg";
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
    <div className="constructionWrapper">
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
  </div>
  )
}

export default ConstructionBudget
