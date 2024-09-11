import React from "react";
import { Helmet } from "react-helmet";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import Partners from "../../HomePage/Partners/Partners";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import InteriorWhy1 from "../InteriorWhy/InteriorWhy1";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorInspire from "../InteriorInspire/InteriorInspire";
import InteriorTypes from "../InteriorTypes/InteriorTypes";
import InteriorHead from "../InteriorHead/InteriorHead";
import BookHead from "./BookHead";
import Footer from "../../Footer/Footer";
import BookWhy from "./BookWhy";
import BookReadmore from "./BookReadmore";

const InteriorBook = () => {
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
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <BookHead />
        <BookWhy />
      </div>
      <InteriorInspire />
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <BookReadmore />
      <Footer />
    </div>
  );
};

export default InteriorBook;
