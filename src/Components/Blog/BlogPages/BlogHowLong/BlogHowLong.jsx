import React from "react";
import WaterProofingHeader from "../BlogWaterProofing/WaterProofingHeader/WaterProofingHeader";
import BlogCategories from "../../BlogCategories";
import HowLongContent from "./HowLongContent";
import BlogAuthor from "../../BlogAuthor/BlogAuthor";
import { Helmet } from "react-helmet";

const BlogHowLong = () => {
  return (
    <div className="blogWaterProofing">
      <Helmet>
        <meta charSet="utf-8" />
        <title>How Long to Build a 30x40 Feet House in Bangalore? </title>
        <meta
          name="description"
          content="How Long to Build a 30x40 Feet House in Bangalore? The construction timeline can be influenced by various factors, including the location, legal approvals, the complexity of the design, availability of labor, and material procurement."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/how-long-to-build-a-30x40-feet-house-in-bangalore"
        />
      </Helmet>
      <WaterProofingHeader head="How Long to Build a 30x40 Feet House in Bangalore?" />
      <div className="blogWrapper">
        <HowLongContent />
        <BlogCategories />
      </div>
      <div className="blogAuthor">
        <BlogAuthor />
      </div>
    </div>
  );
};

export default BlogHowLong;
