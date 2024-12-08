import React from "react";
import { Helmet } from "react-helmet";
import WaterProofingHeader from "../BlogWaterProofing/WaterProofingHeader/WaterProofingHeader";
import BlogCategories from "../../BlogCategories";
import BlogAuthor from "../../BlogAuthor/BlogAuthor";
import BlogFalseCeilingContent from "./BlogFalseCeilingContent";

const BlogFalseCeiling = () => {
  return (
    <div className="blogWaterProofing">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Everything You Need to Know About False Ceiling Costs in Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Everything You Need to Know About False Ceiling Costs in Bangalore"
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/everything-you-need-to-know-about-false-ceiling-costs-in-bangalore"
        />
      </Helmet>
      <WaterProofingHeader head="Everything You Need to Know About False Ceiling Costs in Bangalore" />
      <div className="blogWrapper">
        <BlogFalseCeilingContent />
        <BlogCategories />
      </div>
      <div className="blogAuthor">
        <BlogAuthor />
      </div>
    </div>
  );
};

export default BlogFalseCeiling;
