import React from "react";
import "./../ProjectPage.css";
import ProjectHeader from "../../ProjectHeader";
import ProjectPageCarousel from "../ProjectPageCarousel";
import ProjectPagesContent from "../ProjectPagesContent";
import ProjectManagement from "../ProjectManagement";
const SculptingProject = () => {
  return (
    <div className="projectPage-container">
      <ProjectHeader heading="SCULPTING MODERN HOUSE" id="projectHeaderId" />
      <div className="projectPage-heading">
        <img
          src="https://kothu.wpengine.com/wp-content/uploads/2024/11/new-project-listing-01.jpg"
          alt=""
        />
      </div>
      <div className="projectPage-wrapper">
        <div className="projectPage-content">
          <h3>SCULPTING MODERN HOUSE</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            sed. Amet quam nam commodi praesentium. Aliquam eaque magni,
            doloribus velit harum rem esse quas pariatur tenetur iure explicabo
            consequuntur fugit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Suscipit, quis eaque quidem vero maxime
            repudiandae voluptatum necessitatibus obcaecati velit sapiente ipsa
            commodi fugit rem dignissimos aspernatur aperiam ratione error
            provident!
          </p>
          <ProjectPagesContent />
        </div>
        <div className="projectPage-content">
          <ProjectPageCarousel />
        </div>
      </div>
      <ProjectManagement/>
    </div>
  );
};

export default SculptingProject;
