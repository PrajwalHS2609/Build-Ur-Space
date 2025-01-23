import React from "react";
import "./ProjectPage.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProjectPageCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items:1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="projectPageCarousel-container">
      <div className="projectPageCarousel-content">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          showDots={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="1s ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <div className="projectPageCarousel-wrapper">
              <div className="item">
                <img src="https://kothu.wpengine.com/wp-content/uploads/2024/11/new-project-listing-01.jpg" alt="" loading="lazy" />
              </div>
            </div>
          </div>
          <div>
            <div className="projectPageCarousel-wrapper">
              <div className="item">
                <img src="https://kothu.wpengine.com/wp-content/uploads/2024/11/new-project-listing-01.jpg" alt="" loading="lazy" />
              </div>
            </div>
          </div>
          <div>
            <div className="projectPageCarousel-wrapper">
              <div className="item">
                <img src="https://kothu.wpengine.com/wp-content/uploads/2024/11/new-project-listing-01.jpg" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectPageCarousel;
