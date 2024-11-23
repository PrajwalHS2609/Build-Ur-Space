import React from "react";
import "./HomeBlog.css";
import HomeBlogCard from "./HomeBlogCard";
import trendingWindowDoorBanner from "./../../../Images/BlogImgs/Trending Window and Door/Banner.png";
import essentialVastuBanner from "./../../../Images/BlogImgs/EssentialVastuBanner.png";
import kitchenHallDesignBanner from "./../../../Images/BlogImgs/Modern Kitchen and Hall Design/Banner.png";
import { Link } from "react-router-dom";
const HomeBlogMain = () => {
  return (
    <div className="homeBlogMain">
      <div className="homeBlogMainContainer">
        <HomeBlogCard
          img={essentialVastuBanner}
          alt="essentialVastuBanner"
          link="/essential-vastu-tips-for-building-your-dream-home"
          head="Essential Vastu Tips for Building Your Dream Home"
          para="Creating a harmonious living space goes beyond aesthetics. Incorporating principles of Vastu Shastra—a traditional Indian system of architecture and ..."
        />
        <HomeBlogCard
          img={trendingWindowDoorBanner}
          alt="trendingWindowDoorBanner"
          link="/trending-window-and-door-options-for-modern-homes"
          head="Trending Window and Door Options for Modern Homes: Elevating Style and Functionality"
          para="In contemporary home design, windows and doors are far more than structural elements; they define the character, enhance energy efficiency, and..."
        />
        <HomeBlogCard
          img={kitchenHallDesignBanner}
          alt="kitchenHallDesignBanner"
          link="/modern-kitchen-and-hall-design-ideas-for-your-home"
          head="Modern Kitchen and Hall Design Ideas for Your Home"
          para="When it comes to designing your home, the kitchen and hall are two spaces that hold significant importance. The kitchen is the heart of the home, where ..."
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
