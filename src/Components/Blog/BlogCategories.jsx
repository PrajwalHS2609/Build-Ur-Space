import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
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
            <img
              src="https://img.freepik.com/free-photo/worker-performs-overhaul-roof-residential-building_181624-61003.jpg?uid=R153459844&ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
              alt=""
            />
            <h6>
              Top Waterproofing Materials worth Investing In for Your New Home
            </h6>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            {" "}
            <img
              src="https://img.freepik.com/free-vector/desktop-computer-with-gps-navigation-software_24877-51550.jpg?t=st=1729668307~exp=1729671907~hmac=5651327ee3985f533d51d4d6ca6af7fa20a9e1025e42e9acd0539527c83aa48a&w=740"
              alt=""
            />
            <h6>How Long to Build a 30x40 Feet House in Bangalore?</h6>
          </Link>
        </li>
        <li>
          <Link>
            <img
              src="https://img.freepik.com/free-photo/brick-piles-placed-factory-floor_1150-15102.jpg?uid=R153459844&ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
              alt=""
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
