import React from "react";
import WaterProofingHeader from "../BlogWaterProofing/WaterProofingHeader/WaterProofingHeader";
import BlogAuthor from "../../BlogAuthor/BlogAuthor";
import BlogCategories from "../../BlogCategories";
import WindowAndDoorContent from "./WindowAndDoorContent";
import { Helmet } from "react-helmet";

const BlogWindowAndDoor = () => {
  return (
    <div className="blogWaterProofing">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Trending Window and Door Options for Modern Homes</title>
        <meta
          name="description"
          content="Trending Window and Door Options for Modern Homes, they define the character, enhance energy efficiency, and contribute significantly to the aesthetic appeal of any home."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/trending-window-and-door-options-for-modern-homes"
        />
      </Helmet>
      <WaterProofingHeader head="Trending Window and Door Options for Modern Homes: Elevating Style and Functionality" />
      <div className="blogWrapper">
        <WindowAndDoorContent />
        <BlogCategories />
      </div>
      <div className="blogAuthor">
        <BlogAuthor />
      </div>
    </div>
  );
};

export default BlogWindowAndDoor;
