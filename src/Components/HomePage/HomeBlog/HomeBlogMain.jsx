import React from "react";
import "./HomeBlog.css";
import HomeBlogCard from "./HomeBlogCard";
import waterProofingBanner from "./../../../Images/WaterProofingBlog/Banner.png";
import howLongBanner from "./../../../Images/How_Long_to_Build/Banner.png";
import brickBanner from "./../../../Images/Brick_Masonry/Banner.png";
import { Link } from "react-router-dom";
const HomeBlogMain = () => {
  return (
    <div className="homeBlogMain">
      <div className="homeBlogMainContainer">
        <HomeBlogCard
          img={waterProofingBanner}
          alt="waterProofingBanner"
          head="Top Waterproofing Materials worth Investing In for Your New Home"
          para="Building a new home is one of the most significant investments you'll ever make, and safeguarding it from damage is essential for maintaining..."
          link="/top-waterproofing-materials-worth-investing-in-for-your-new-home"
        />
        <HomeBlogCard
          img={howLongBanner}
          alt="howLongBanner"
          head="How Long to Build a 30x40 Feet House in Bangalore?"
          para="Building a house is one of the most exciting, yet complex, projects anyone can undertake. If you are planning to construct a 30x40 Feet House in Bangalore, it’s essential to..."
          link="/how-long-to-build-a-30x40-feet-house-in-bangalore"
        />
        <HomeBlogCard
          img={brickBanner}
          alt="brickBanner"
          head="Current Types of Brick Masonry in Use Today"
          para="Brick masonry for home construction remains one of the most popular and enduring building methods across the globe. With roots tracing back thousands of years, this technique..."
          link="/current-types-of-brick-masonry-in-use-today"
        />
      </div>
      <div className="homeBlogBtn">
        <Link to={"/blog"}>
          <button>View More</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBlogMain;
