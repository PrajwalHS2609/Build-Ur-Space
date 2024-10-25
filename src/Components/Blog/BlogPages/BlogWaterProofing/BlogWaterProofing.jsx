import React from "react";

import WaterProofingHeader from "./WaterProofingHeader/WaterProofingHeader";
import WaterProofingContent from "./WaterProofingContent";
import BlogCategories from "../../BlogCategories";

const BlogWaterProofing = () => {
  return (
    <div className="blogWaterProofing">
      <WaterProofingHeader />
      <div className="blogWrapper">
        <WaterProofingContent />
        <BlogCategories />
      </div>
    </div>
  );
};

export default BlogWaterProofing;
