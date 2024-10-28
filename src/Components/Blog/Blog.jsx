import React from "react";
import "./Blog.css";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import BlogCategories from "./BlogCategories";
const Blog = () => {
  return (
    <div className="blogContainer">
      <BlogHeader />
      <div className="blogWrapper">
        <BlogContent />
        <BlogCategories />
      </div>
    </div>
  );
};

export default Blog;
