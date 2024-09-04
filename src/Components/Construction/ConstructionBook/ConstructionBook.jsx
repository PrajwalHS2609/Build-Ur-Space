import React from "react";
import { Helmet } from "react-helmet";
import ConstructionHead from "../ConstructionHead";
import ConstructionTypeMain from "../ConstructionType/ConstructionTypeMain";
import Portfolio from "../../Portfolio/Portfolio";
import PackageConstruction from "../PackageConstruction";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import BrandWeUse from "../../HomePage/BrandWeUse/BrandWeUse";
import Partners from "../../HomePage/Partners/Partners";
import HomeConstructionImg from "../../HomePage/HomeImg/HomeConstructionImg";
import BookReadmore from "./BookReadmore";
import BookHead from "./BookHead";
import BookWhy from "./BookWhy";
import Footer from "../../Footer/Footer";

const ConstructionBook = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Modular Book Shelves in Bangalore for Home - Buildurspace</title>
        <meta
          name="description"
          content="Modular Book Shelves in Bangalore for Home. We offer an exceptional range of modular bookshelves designed to blend seamlessly with your interior decor while providing you with ample storage."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/modular-book-shelves-in-bangalore-for-home"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <BookHead />
        <BookWhy />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <BookReadmore />
      <Footer />
    </div>
  );
};

export default ConstructionBook;
