import React from "react";
import "./Blog.css";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import BlogCategories from "./BlogCategories";
import WhatsApp from "./../HomePage/WhatsApp/WhatsApp";
import Footer from "./../Footer/Footer";
import BlogAuthor from "./BlogAuthor/BlogAuthor";
const Blog = () => {
  return (
    <div className="blogContainer">
      <BlogHeader />
      <div className="blogWrapper">
        <BlogContent />
        <BlogCategories />
      </div>

      <WhatsApp />
      <Footer />
    </div>
  );
};

export default Blog;
