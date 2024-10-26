import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import waterProofingBanner from "./../../Images/WaterProofingBlog/Banner.png";
import howLongBanner from "./../../Images/How_Long_to_Build/Banner.png";
import brickMansoryBanner from "./../../Images/Brick_Masonry/Banner.png";

const BlogCategories = () => {
  return (
    <div className="blogCategories">
      <div className="blogCategoriesHead">
        <h3>Recent Posts</h3>
      </div>
      <div className="blogCategoriesList">
        <li>
          <Link
            to={
              "/top-waterproofing-materials-worth-investing-in-for-your-new-home   "
            }
          >
            <img src={waterProofingBanner} alt="" />
            <h6>
              Top Waterproofing Materials worth Investing In for Your New Home
            </h6>
          </Link>
        </li>
        <li>
          <Link to={"/how-long-to-build-a-30x40-feet-house-in-bangalore"}>
            {" "}
            <img
              src={howLongBanner}
              alt="howLongBanner"
            />
            <h6>How Long to Build a 30x40 Feet House in Bangalore?</h6>
          </Link>
        </li>
        <li>
          <Link to={"/current-types-of-brick-masonry-in-use-today"}>
            <img
              src={brickMansoryBanner}
              alt="brickMansoryBanner"
            />
            <h6>Current Types of Brick Masonry in Use Today</h6>
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
          <Link to={"/"}>
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
