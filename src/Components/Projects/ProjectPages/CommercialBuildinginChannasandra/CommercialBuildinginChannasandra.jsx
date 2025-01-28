import React from "react";
import "./../ProjectPage.css";
import ProjectHeader from "../../ProjectHeader";
import ProjectPagesContent from "../ProjectPagesContent";
import ProjectManagement from "../ProjectManagement";
import CommercialProjectinChannasandra9 from "./../../../../Images/Commercial Building Construction in Channasandra/CommercialProjectinChannasandra9.jpeg";
import ProjectPageCarousel from "./ProjectPageCarousel";

const CommercialBuildinginChannasandra = () => {
  return (
    <div className="projectPage-container">
      <ProjectHeader heading="SCULPTING MODERN HOUSE" id="projectHeaderId" />
      <div className="projectPage-heading">
        <img
          src={CommercialProjectinChannasandra9}
          alt="CommercialProjectinChannasandra9"
        />
      </div>
      <div className="projectPage-wrapper">
        <div className="projectPage-content">
          <h3>COMMERCIAL BUILDING IN CHANNASANDRA</h3>
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
            location="Channasandra"
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

export default CommercialBuildinginChannasandra;
