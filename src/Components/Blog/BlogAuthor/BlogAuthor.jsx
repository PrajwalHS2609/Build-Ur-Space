import React from "react";
import "./BlogAuthor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import author1 from "./../../../Images/BlogImgs/BlogAuthor/Author1.jpeg";
const BlogAuthor = () => {
  return (
    <div className="blogAuthorContainer">
      <div className="blogAuthorContent">
        <div className="blogAuthorImg">
          <img src={author1} alt="Sriharsha Mallesh" />
        </div>
        <div className="blogAuthorName">
          <h4>
            Experienced Civil Engineer | Construction & Interior Design
            Specialist
          </h4>
          <h3>Sriharsha Mallesh</h3>
        </div>
      </div>
      <div className="blogAuthorContent">
        <p>
          With 5 years of expertise in construction and interior design, I have
          successfully delivered 16+ residential and commercial construction
          projects and crafted stunning interiors for 36+ spaces. Specializing
          in creating functional and aesthetic designs, I am passionate about
          transforming ideas into reality with precision and quality. From
          project planning to execution, I ensure every detail aligns with
          client expectations and industry standards.
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
