import React from "react";

import WaterProofingHeader from "./WaterProofingHeader/WaterProofingHeader";
import WaterProofingContent from "./WaterProofingContent";
import BlogCategories from "../../BlogCategories";
import BlogAuthor from "../../BlogAuthor/BlogAuthor";
import { Helmet } from "react-helmet";

const BlogWaterProofing = () => {
  return (
    <div className="blogWaterProofing">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Top Waterproofing Materials worth Investing In for Your New Home{" "}
        </title>
        <meta
          name="description"
          content="Top Waterproofing Materials worth Investing In for Your New Home. Water damage, in particular, is a common issue that can affect both the structural integrity and the comfort of your living space."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/top-waterproofing-materials-worth-investing-in-for-your-new-home"
        />
      </Helmet>
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
