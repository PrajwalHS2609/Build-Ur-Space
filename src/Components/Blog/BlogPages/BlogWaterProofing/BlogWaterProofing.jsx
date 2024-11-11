import React from "react";

import WaterProofingHeader from "./WaterProofingHeader/WaterProofingHeader";
import WaterProofingContent from "./WaterProofingContent";
import BlogCategories from "../../BlogCategories";
import BlogAuthor from "../../BlogAuthor/BlogAuthor";

const BlogWaterProofing = () => {
  return (
    <div className="blogWaterProofing">
      <WaterProofingHeader head="Top Waterproofing Materials worth Investing In for Your New Home" />
      <div className="blogWrapper">
        <WaterProofingContent />
        <BlogCategories />
      </div>
      <div className="blogAuthor">
        <BlogAuthor />
      </div>
    </div>
  );
};

export default BlogWaterProofing;
