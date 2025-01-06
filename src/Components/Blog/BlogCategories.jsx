import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import duplexHouseBanner from "./../../Images/BlogImgs/Duplex House Construction/Banner.png";
import interiorPaintBanner from "./../../Images/BlogImgs/Trending Interior Paint Colors and Expert Tips/Banner.png";
import pccConcretingBanner from "./../../Images/BlogImgs/PccConcreting/Banner.png";

const BlogCategories = () => {
  const categories = [
    {
      id: 1,
      img: interiorPaintBanner,
      alt: "Interior Paint Colors Banner",
      link: "/trending-interior-paint-colors-and-expert-tips-for-your-home",
      head: "Trending Interior Paint Colors and Expert Tips for Your Home!",
      para: "Choosing the right home interior paint colors can completely transform the look and feel of your space. Whether you're...",
    },
    {
      id: 2,
      img: duplexHouseBanner,
      alt: "Duplex House Banner",
      link: "/expert-duplex-house-construction-crafting-dreams-for-modern-living",
      head: "Expert Duplex House Construction: Crafting Dreams for Modern Living",
      para: "Building a home is a significant milestone in life, and choosing the right construction style plays a crucial role in defining your ...",
    },
    {
      id: 3,
      link: "/building-strong-foundations-with-durable-pcc-concreting-for-your-projects",
      img: pccConcretingBanner,
      alt: "pcc Concreting Banner",
      head: "Building Strong Foundations with Durable PCC Concreting for Your Projects",
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
