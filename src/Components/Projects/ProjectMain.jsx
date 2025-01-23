import React, { useEffect, useState } from "react";
import "./Project.css";
import { Link } from "react-router-dom";
const ProjectMain = () => {
  const project = [
    {
      id: 1,
      img: "https://kothu.wpengine.com/wp-content/uploads/2024/11/new-project-listing-01.jpg",
      title: "SCULPTING MODERN HOUSE",
      subTitle1: "STRUCTURAL DESIGN",
      subTitle2: "MODERN HOUSE",
      link: "/project1",
    },
    {
      id: 2,
      img: "https://kothu.wpengine.com/wp-content/uploads/2024/11/new-project-listing-02.jpg",
      title: "ECO MODERN CONSTRUCTION",
      subTitle1: "MODERN HOUSE",
      subTitle2: "HOUSE DESIGN",
      link: "/project1",
    },
    {
      id: 3,
      img: "https://kothu.wpengine.com/wp-content/uploads/2024/11/new-project-listing-09.jpg",
      title: "SIMPLICITY MEET DESIGNERS",
      subTitle1: "STRUCTURAL DESIGN",
      subTitle2: "MODERN HOUSE",
      link: "/project1",
    },
    {
      id: 4,
      img: "https://kothu.wpengine.com/wp-content/uploads/2024/11/new-project-listing-08.jpg",
      title: "SCULPTING MODERN HOUSE",
      subTitle1: "STRUCTURAL DESIGN",
      subTitle2: "MODERN HOUSE",
      link: "/project1",
    },
    {
      id: 5,
      img: "https://kothu.wpengine.com/wp-content/uploads/2024/11/new-project-listing-05.jpg",
      title: "OFFICE  POINT CONSTRUCTION",
      subTitle1: "GREEN BUILDING",
      subTitle2: "OFFICE DESIGN",
      link: "/project1",
    },
    {
      id: 6,
      img: "https://kothu.wpengine.com/wp-content/uploads/2024/11/new-project-listing-03.jpg",
      title: "SUSTAINABLE ENERGY SOLUTION",
      subTitle1: "MODERN BUILDING",
      subTitle2: "GREEN BUILDING",
      link: "/project1",
    },
    {
      id: 7,
      img: "https://kothu.wpengine.com/wp-content/uploads/2024/11/new-project-listing-09.jpg",
      title: "SCULPTING MODERN HOUSE",
      subTitle1: "STRUCTURAL DESIGN",
      subTitle2: "MODERN HOUSE",
      link: "/project1",
    },
    {
      id: 8,
      img: "https://kothu.wpengine.com/wp-content/uploads/2024/11/new-project-listing-01.jpg",
      title: "ECO MODERN CONSTRUCTION",
      subTitle1: "MODERN HOUSE",
      subTitle2: "HOUSE DESIGN",
      link: "/project1",
    },
    {
      id: 9,
      img: "https://kothu.wpengine.com/wp-content/uploads/2024/11/new-project-listing-05.jpg",
      title: "SIMPLICITY MEET DESIGNERS",
      subTitle1: "STRUCTURAL DESIGN",
      subTitle2: "MODERN HOUSE",
      link: "/project1",
    },
    {
      id: 10,
      img: "https://kothu.wpengine.com/wp-content/uploads/2024/11/new-project-listing-02.jpg",
      title: "SCULPTING MODERN HOUSE",
      subTitle1: "STRUCTURAL DESIGN",
      subTitle2: "MODERN HOUSE",
      link: "/project1",
    },
    {
      id: 11,
      img: "https://kothu.wpengine.com/wp-content/uploads/2024/11/new-project-listing-05.jpg",
      title: "OFFICE  POINT CONSTRUCTION",
      subTitle1: "GREEN BUILDING",
      subTitle2: "OFFICE DESIGN",
      link: "/project1",
    },
    {
      id: 12,
      img: "https://kothu.wpengine.com/wp-content/uploads/2024/11/new-project-listing-03.jpg",
      title: "SUSTAINABLE ENERGY SOLUTION",
      subTitle1: "MODERN BUILDING",
      subTitle2: "GREEN BUILDING",
      link: "/project1",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of blogs per page

  const totalPages = Math.ceil(project.length / itemsPerPage);

  const currentProject = project.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const preloadImages = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    project.slice(startIndex, endIndex).forEach((project) => {
      const img = new Image();
      img.src = project.img;
    });
  };

  useEffect(() => {
    preloadImages(currentPage);
  }, [currentPage]);

  return (
    <>
      <div className="projectMain-container">
        {currentProject.map((project, index) => (
          <Link to={project.link} key={project.id}>
            <div className="projectMain-content">
              <div className="projectMain-imgContainer">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="projectMain-txtContainer">
                <span>
                  <h6>{project.subTitle1}</h6>|<h6>{project.subTitle2}</h6>
                </span>
                <Link to={"/"}>
                  {" "}
                  <h3>{project.title}</h3>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pageButton ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default ProjectMain;
