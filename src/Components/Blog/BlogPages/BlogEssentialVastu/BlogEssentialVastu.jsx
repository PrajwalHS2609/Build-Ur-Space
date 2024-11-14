import React from "react";
import { Helmet } from "react-helmet";
import WaterProofingHeader from "../BlogWaterProofing/WaterProofingHeader/WaterProofingHeader";
import BlogCategories from "../../BlogCategories";
import BlogAuthor from "../../BlogAuthor/BlogAuthor";
import EssentialVastuContent from "./EssentialVastuContent";

const BlogEssentialVastu = () => {
  return (
    <div className="blogWaterProofing">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Essential Vastu Tips for Building Your Dream Home</title>
        <meta
          name="description"
          content="Essential Vastu Tips for Building Your Dream Home. Incorporating principles of Vastu Shastra—a traditional Indian system of architecture and design—can bring balance, positivity, and prosperity into your home."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/essential-vastu-tips-for-building-your-dream-home"
        />
      </Helmet>
      <WaterProofingHeader head="Essential Vastu Tips for Building Your Dream Home" />
      <div className="blogWrapper">
        <EssentialVastuContent />
        <BlogCategories />
      </div>
      <div className="blogAuthor">
        <BlogAuthor />
      </div>
    </div>
  );
};

export default BlogEssentialVastu;
