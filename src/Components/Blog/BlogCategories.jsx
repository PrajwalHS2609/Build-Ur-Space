import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import essentialVastuBanner from "./../../Images/BlogImgs/EssentialVastuBanner.png";
import trendingWindowDoor from "./../../Images/BlogImgs/Trending Window and Door/Banner.png";
import kitchenHallDesignBanner from "./../../Images/BlogImgs/Modern Kitchen and Hall Design/Banner.png";

const BlogCategories = () => {
  return (
    <div className="blogCategories">
      <div className="blogCategoriesHead">
        <h3>Recent Posts</h3>
      </div>
      <div className="blogCategoriesList">
        <li>
          <Link to={"/essential-vastu-tips-for-building-your-dream-home "}>
            <img src={essentialVastuBanner} alt="essentialVastuBanner" />
            <h6>Essential Vastu Tips for Building Your Dream Home </h6>
          </Link>
        </li>
        <li>
          <Link to={"/trending-window-and-door-options-for-modern-homes"}>
            {" "}
            <img src={trendingWindowDoor} alt="trendingWindowDoor" />
            <h6>Trending Window and Door Options for Modern Homes</h6>
          </Link>
        </li>
        <li>
          <Link to={"/modern-kitchen-and-hall-design-ideas-for-your-home"}>
            {" "}
            <img src={kitchenHallDesignBanner} alt="trendingWindowDoor" />
            <h6>Modern Kitchen and Hall Design Ideas for Your Home</h6>
          </Link>
        </li>
      </div>
      <div className="blogCategoriesHead" id="blogCategories">
        <h3>Categories</h3>
      </div>
      <div className="blogCategoriesList" id="blogCategoriesList1">
        <li>
          <Link to={"/"}>
            {" "}
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="blogIcon"
            ></FontAwesomeIcon>{" "}
            Architecture
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/"}>
            {" "}
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="blogIcon"
            ></FontAwesomeIcon>{" "}
            Buildings
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/"}>
            {" "}
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="blogIcon"
            ></FontAwesomeIcon>{" "}
            Construction
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/category-doors-and-windows"}>
            {" "}
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="blogIcon"
            ></FontAwesomeIcon>{" "}
            Doors & Windows
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/"}>
            {" "}
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="blogIcon"
            ></FontAwesomeIcon>{" "}
            Green Building{" "}
          </Link>
        </li>
      </div>
    </div>
  );
};

export default BlogCategories;
