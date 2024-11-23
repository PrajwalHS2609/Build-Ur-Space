import React from "react";
import WaterProofingHeader from "../BlogWaterProofing/WaterProofingHeader/WaterProofingHeader";
import BlogCategories from "../../BlogCategories";
import BlogAuthor from "../../BlogAuthor/BlogAuthor";
import KitchenHallDesignContent from "./KitchenHallDesignContent";
import { Helmet } from "react-helmet";

const BlogKitchenHallDesign = () => {
  return (
    <div className="blogWaterProofing">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Modern Kitchen and Hall Design Ideas for Your Home </title>
        <meta
          name="description"
          content="Modern Kitchen and Hall Design Ideas for Your Home. The kitchen is the heart of the home, where delicious meals are prepared and memories are made."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/modern-kitchen-and-hall-design-ideas-for-your-home"
        />
      </Helmet>
      <WaterProofingHeader head="Modern Kitchen and Hall Design Ideas for Your Home" />
      <div className="blogWrapper">
        <KitchenHallDesignContent />
        <BlogCategories />
      </div>{" "}
      <div className="blogAuthor">
        <BlogAuthor />
      </div>
    </div>
  );
};

export default BlogKitchenHallDesign;
