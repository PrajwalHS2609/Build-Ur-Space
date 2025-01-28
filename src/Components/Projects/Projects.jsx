import React from "react";
import "./Project.css";
import ProjectHeader from "./ProjectHeader";
import ProjectMain from "./ProjectMain";

const Projects = () => {
  return (
    <div className="project-container">
      <ProjectHeader heading="Our Ongoing Projects" />
      <ProjectMain />
    </div>
  );
};

export default Projects;
