import React from "react";
import PccConcretingContent from "./PccConcretingContent";
import BlogCategories from "../../BlogCategories";
import BlogAuthor from "../../BlogAuthor/BlogAuthor";
import { Helmet } from "react-helmet";
import WaterProofingHeader from "../BlogWaterProofing/WaterProofingHeader/WaterProofingHeader";

const BlogPccConcreting = () => {
  return (
    <div className="blogWaterProofing">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Building Strong Foundations with Durable PCC Concreting for Your
          Projects{" "}
        </title>
        <meta
          name="description"
          content="Building Strong Foundations with Durable PCC Concreting for Your Projects."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/building-strong-foundations-with-durable-pcc-concreting-for-your-projects"
        />
      </Helmet>
      <WaterProofingHeader head="Building Strong Foundations with Durable PCC Concreting for Your Projects" />
      <div className="blogWrapper">
        <PccConcretingContent />
        <BlogCategories />
      </div>
      <div className="blogAuthor">
        <BlogAuthor />
      </div>
    </div>
  );
};

export default BlogPccConcreting;
