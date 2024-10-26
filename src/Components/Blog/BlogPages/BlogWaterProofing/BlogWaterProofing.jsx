import React from "react";

import WaterProofingHeader from "./WaterProofingHeader/WaterProofingHeader";
import WaterProofingContent from "./WaterProofingContent";
import BlogCategories from "../../BlogCategories";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import Footer from "../../../Footer/Footer";

const BlogWaterProofing = () => {
  return (
    <div className="blogWaterProofing">
      <WaterProofingHeader head="Top Waterproofing Materials worth Investing In for Your New Home" />
      <div className="blogWrapper">
        <WaterProofingContent />
        <BlogCategories />
      </div>
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default BlogWaterProofing;
