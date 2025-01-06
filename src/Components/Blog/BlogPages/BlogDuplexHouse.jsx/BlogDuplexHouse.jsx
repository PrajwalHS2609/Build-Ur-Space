import React from "react";
import { Helmet } from "react-helmet";
import WaterProofingHeader from "../BlogWaterProofing/WaterProofingHeader/WaterProofingHeader";
import BlogCategories from "../../BlogCategories";
import BlogAuthor from "../../BlogAuthor/BlogAuthor";
import DuplexHouseContent from "./DuplexHouseContent";

const BlogDuplexHouse = () => {
  return (
    <div className="blogWaterProofing">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Expert Duplex House Construction: Crafting Dreams for Modern Living
        </title>
        <meta
          name="description"
          content="Expert Duplex House Construction: Crafting Dreams for Modern Living. Whether you are a growing family seeking more space or an investor looking for high returns, duplex houses offer the perfect blend of practicality and aesthetics."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/expert-duplex-house-construction-crafting-dreams-for-modern-living"
        />
      </Helmet>
      <WaterProofingHeader head="Expert Duplex House Construction: Crafting Dreams for Modern Living" />
      <div className="blogWrapper">
        <DuplexHouseContent />
        <BlogCategories />
      </div>
      <div className="blogAuthor">
        <BlogAuthor />
      </div>
    </div>
  );
};

export default BlogDuplexHouse;
