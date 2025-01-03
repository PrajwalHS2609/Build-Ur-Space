import React from "react";
import { Helmet } from "react-helmet";
import ShopHead from './ShopHead';
import ShopWhy from './ShopWhy';
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
import ShopReadmore from './ShopReadmore';


const ConstructionShop = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Shop Construction in Bangalore | Commercial Building Construction Cost
          in Bangalore
        </title>
        <meta
          name="description"
          content="Shop Construction in Bangalore. We offering tailored solutions that meet your specific business needs while ensuring quality and cost-effectiveness."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/shop-construction-in-bangalore"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <ShopHead />
        <ShopWhy />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <ShopReadmore />
    </div>
  );
};

export default ConstructionShop;
