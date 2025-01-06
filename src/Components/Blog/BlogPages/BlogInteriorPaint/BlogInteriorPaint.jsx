import React from "react";
import { Helmet } from "react-helmet";
import WaterProofingHeader from "../BlogWaterProofing/WaterProofingHeader/WaterProofingHeader";
import InteriorPaintContent from "./InteriorPaintContent";
import BlogCategories from "../../BlogCategories";
import BlogAuthor from "../../BlogAuthor/BlogAuthor";

const BlogInteriorPaint = () => {
  return (
    <div className="blogWaterProofing">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Trending Interior Paint Colors and Expert Tips for Your Home!{" "}
        </title>
        <meta
          name="description"
          content="Trending Interior Paint Colors and Expert Tips for Your Home! Whether you're refreshing a single room or revamping your entire home, the colors you choose set the tone for your living environment. "
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/trending-interior-paint-colors-and-expert-tips-for-your-home"
        />
      </Helmet>
      <WaterProofingHeader head="Trending Interior Paint Colors and Expert Tips for Your Home!" />
      <div className="blogWrapper">
        <InteriorPaintContent />
        <BlogCategories />
      </div>
      <div className="blogAuthor">
        <BlogAuthor />
      </div>
    </div>
  );
};

export default BlogInteriorPaint;
