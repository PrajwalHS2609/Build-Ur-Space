import React from "react";
import "./BlogAuthor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
const BlogAuthor = () => {
  return (
    <div className="blogAuthorContainer">
      <div className="blogAuthorContent">
        <div className="blogAuthorImg">
          <img
            src="https://static.agentestudio.com/uploads/author/photo/1/andrew_headshot.jpg"
            alt=""
          />
        </div>
        <div className="blogAuthorName">
          <h4>Partner/Managing Director</h4>
          <h3>John Doe</h3>
        </div>
      </div>
      <div className="blogAuthorContent">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          veniam sunt illo sapiente labore alias hic maxime voluptatibus ullam
          natus repellendus facere nostrum non, dolore consequatur cupiditate
          laudantium nam asperiores?
        </p>
      </div>
      <div className="blogAuthorSocial">
        <a href="/">
          <FontAwesomeIcon
            icon={faInstagram}
            className="authorSocialIcon"
          ></FontAwesomeIcon>
        </a>
        <a href="/">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="authorSocialIcon"
          ></FontAwesomeIcon>
        </a>
        <a href="/">
          <FontAwesomeIcon
            icon={faXTwitter}
            className="authorSocialIcon"
          ></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
};

export default BlogAuthor;
