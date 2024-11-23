import React from "react";
import BlogCategories from "../../BlogCategories";
import WaterProofingHeader from "../BlogWaterProofing/WaterProofingHeader/WaterProofingHeader";
import BrickMasonryContent from "./BrickMasonryContent";
import BlogAuthor from "../../BlogAuthor/BlogAuthor";
import { Helmet } from "react-helmet";

const BlogBrickMasonry = () => {
  return (
    <div className="blogWaterProofing">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Current Types of Brick Masonry in Use Today! </title>
        <meta
          name="description"
          content="Current Types of Brick Masonry in Use Today! With roots tracing back thousands of years, this technique continues to be valued for its strength, durability, and aesthetic appeal."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/current-types-of-brick-masonry-in-use-today"
        />
      </Helmet>
      <WaterProofingHeader head="Current Types of Brick Masonry in Use Today" />
      <div className="blogWrapper">
        <BrickMasonryContent />
        <BlogCategories />
      </div>{" "}
      <div className="blogAuthor">
        <BlogAuthor />
      </div>
    </div>
  );
};

export default BlogBrickMasonry;
