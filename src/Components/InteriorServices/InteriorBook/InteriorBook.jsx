import React from "react";
import { Helmet } from "react-helmet";
import InteriorHead from "../../Interior/InteriorHead/InteriorHead";
import InteriorTypes from "../../Interior/InteriorTypes/InteriorTypes";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../../Interior/InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import BookHead from "./BookHead";
import BookWhy from "./BookWhy";
import BookReadmore from "./BookReadmore";
import InteriorInspire from "../../Interior/InteriorInspire/InteriorInspire";

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
    </div>
  );
};

export default InteriorBook;
