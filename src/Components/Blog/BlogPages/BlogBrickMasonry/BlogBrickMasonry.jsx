import React from "react";
import BlogCategories from "../../BlogCategories";
import WaterProofingHeader from "../BlogWaterProofing/WaterProofingHeader/WaterProofingHeader";
import BrickMasonryContent from "./BrickMasonryContent";
import BlogAuthor from "../../BlogAuthor/BlogAuthor";

const BlogBrickMasonry = () => {
  return (
    <div className="blogWaterProofing">
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
