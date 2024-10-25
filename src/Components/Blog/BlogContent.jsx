import React from "react";
import "./Blog.css";
import BlogContentCard from "./BlogContentCard";
const BlogContent = () => {
  return (
    <div className="blogContent">
      <BlogContentCard
        img="https://img.freepik.com/free-photo/worker-performs-overhaul-roof-residential-building_181624-61003.jpg?uid=R153459844&ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
        alt="waterproofing-materials"
        link="/top-waterproofing-materials-worth-investing-in-for-your-new-home   "
        head="Top Waterproofing Materials worth Investing In for Your New Home"
        para="Building a new home is one of the most significant investments you'll ever make, and safeguarding it from damage is essential for maintaining..."
      />
      <BlogContentCard
        img="https://images.unsplash.com/photo-1542621334-a254cf47733d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZXByaW50fGVufDB8fDB8fHww"
        alt="build-a-30x40"
        link="/how-long-to-build-a-30x40-feet-house-in-bangalore   "
        head="How Long to Build a 30x40 Feet House in Bangalore?"
        para="Building a house is one of the most exciting, yet complex, projects anyone can undertake. If you are planning to construct a 30x40 Feet House in Bangalore, it’s essential to..."
      />
      <BlogContentCard
        img="https://img.freepik.com/free-photo/brick-piles-placed-factory-floor_1150-15102.jpg?uid=R153459844&ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
        alt="current-types-of-brick"
        link="/current-types-of-brick-masonry-in-use-today    "
        head="Current Types of Brick Masonry in Use Today"
        para="Brick masonry for home construction remains one of the most popular and enduring building methods across the globe. With roots tracing back thousands of years, this technique..."
      />
    </div>
  );
};

export default BlogContent;
