import React from "react";
import "./Blog.css";
import BlogContentCard from "./BlogContentCard";
import waterProofingBanner from "./../../Images/WaterProofingBlog/Banner.png";
import howLongBanner from "./../../Images/How_Long_to_Build/Banner.png";
import brickMansoryBanner from "./../../Images/Brick_Masonry/Banner.png";

const BlogContent = () => {
  return (
    <div className="blogContent">
      <BlogContentCard
        img={waterProofingBanner}
        alt="waterproofing-materials"
        link="/top-waterproofing-materials-worth-investing-in-for-your-new-home   "
        head="Top Waterproofing Materials worth Investing In for Your New Home"
        para="Building a new home is one of the most significant investments you'll ever make, and safeguarding it from damage is essential for maintaining..."
      />
      <BlogContentCard
        img={howLongBanner}
        alt="build-a-30x40"
        link="/how-long-to-build-a-30x40-feet-house-in-bangalore   "
        head="How Long to Build a 30x40 Feet House in Bangalore?"
        para="Building a house is one of the most exciting, yet complex, projects anyone can undertake. If you are planning to construct a 30x40 Feet House in Bangalore, it’s essential to..."
      />
      <BlogContentCard
        img={brickMansoryBanner}
        alt="current-types-of-brick"
        link="/current-types-of-brick-masonry-in-use-today    "
        head="Current Types of Brick Masonry in Use Today"
        para="Brick masonry for home construction remains one of the most popular and enduring building methods across the globe. With roots tracing back thousands of years, this technique..."
      />
    </div>
  );
};

export default BlogContent;
