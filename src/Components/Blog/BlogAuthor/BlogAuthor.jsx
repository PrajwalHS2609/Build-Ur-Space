import React from "react";
import "./BlogAuthor.css";
const BlogAuthor = () => {
  return (
    <div className="blogAuthorContainer">
      <div className="blogAuthorContent">
        <div className="blogAuthorItem">
          <img
            src="https://static.agentestudio.com/uploads/author/photo/1/andrew_headshot.jpg"
            alt=""
          />
        </div>
        <div className="blogAuthorItem">
          <h6>John Doe</h6>
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
      <div className="blogAuthorContent"></div>
    </div>
  );
};

export default BlogAuthor;
