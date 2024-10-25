import React from "react";
import WaterProofingHeader from "../BlogWaterProofing/WaterProofingHeader/WaterProofingHeader";
import BlogCategories from "../../BlogCategories";
import HowLongContent from "./HowLongContent";

const BlogHowLong = () => {
  return (
    <div className="blogWaterProofing">
      <WaterProofingHeader />
      <div className="blogWrapper">
        <HowLongContent />
        <BlogCategories />
      </div>
    </div>
  );
};

export default BlogHowLong;
