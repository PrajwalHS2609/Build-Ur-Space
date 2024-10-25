import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
const BlogContentCard = (props) => {
  return (
    <div className="blogContentCard">
      <div className="blogContentCardImg">
        <img src={props.img} alt="" />
      </div>
      <div className="blogContentCardTxt">
        <h3>{props.head}</h3>
        <p>{props.para}</p>
        <Link to={props.link}>
          {" "}
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogContentCard;
