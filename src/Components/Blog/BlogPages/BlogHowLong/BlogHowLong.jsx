import React from "react";
import WaterProofingHeader from "../BlogWaterProofing/WaterProofingHeader/WaterProofingHeader";
import BlogCategories from "../../BlogCategories";
import HowLongContent from "./HowLongContent";
import WhatsApp from "../../../HomePage/WhatsApp/WhatsApp";
import Footer from "../../../Footer/Footer";

const BlogHowLong = () => {
  return (
    <div className="blogWaterProofing">
      <WaterProofingHeader
        head="How Long to Build a 30x40 Feet House in Bangalore?"
      />
      <div className="blogWrapper">
        <HowLongContent />
        <BlogCategories />
      </div>
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default BlogHowLong;
