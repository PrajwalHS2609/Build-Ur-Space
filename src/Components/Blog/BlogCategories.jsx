import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import trendingWindowDoor from "./../../Images/BlogImgs/Trending Window and Door/Banner.png";
import kitchenHallDesignBanner from "./../../Images/BlogImgs/Modern Kitchen and Hall Design/Banner.png";
import falseCeilingBanner from "./../../Images/BlogImgs/False_ceiling/Banner.png";

const BlogCategories = () => {
  const categories = [
    {
      id: "1",
      link: "/trending-window-and-door-options-for-modern-homes",
      img: trendingWindowDoor,
      alt: "trendingWindowDoor",
      head: "Modern Kitchen and Hall Design Ideas for Your Home",
    },
    {
      id: "2",
      link: "/modern-kitchen-and-hall-design-ideas-for-your-home",
      img: kitchenHallDesignBanner,
      alt: "kitchenHallDesignBanner",
      head: "Modern Kitchen and Hall Design Ideas for Your Home",
    },
    {
      id: "3",
      link: "/everything-you-need-to-know-about-false-ceiling-costs-in-bangalore",
      img: falseCeilingBanner,
      alt: "falseCeilingBanner",
      head: "Everything You Need to Know About False Ceiling Costs in Bangalore",
    },
  ];
  return (
    <div className="blogCategories">
      <div className="blogCategoriesHead">
        <h3>Recent Posts</h3>
      </div>
      <div className="blogCategoriesList">
        {categories.map((x) => (
          <li>
            <Link to={x.link}>
              {" "}
              <img src={x.img} alt={x.alt} />
              <h6>{x.head}</h6>
            </Link>
          </li>
        ))}
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
          <Link to={"/category-construction"}>
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
          <Link to={"/category-false-ceiling"}>
            {" "}
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="blogIcon"
            ></FontAwesomeIcon>{" "}
            False Ceiling{" "}
          </Link>
        </li>
      </div>
    </div>
  );
};

export default BlogCategories;
