import React from "react";
import "./../ProjectPage.css";
import ProjectHeader from "../../ProjectHeader";
import ProjectPagesContent from "../ProjectPagesContent";
import ProjectManagement from "../ProjectManagement";
import sizzleMidtownBanner from "./../../../../Images/Projects/Sizzle Midtown/sizzleMidtownHeaderBanner.png";
import ProjectPageCarousel from "./ProjectCarousel";

const SizzleMidtown = () => {
  return (
    <div className="projectPage-container">
      <ProjectHeader heading="SCULPTING MODERN HOUSE" id="projectHeaderId" />
      <div className="projectPage-heading">
        <img
          src={sizzleMidtownBanner}
          alt="sizzleMidtownBanner"
        />
      </div>
      <div className="projectPage-wrapper">
        <div className="projectPage-content">
          <h3>SIZZLE MIDTOWN IN VIGHYAN NAGAR</h3>
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
          <ProjectPagesContent
            client="John Doe"
            date="29 Nov"
            method="General"
            leader="Smith"
            location="Vighyan Nagar"
          />
        </div>
        <div className="projectPage-content">
          <ProjectPageCarousel />
        </div>
      </div>
      <ProjectManagement />
    </div>
  );
};

export default SizzleMidtown;
