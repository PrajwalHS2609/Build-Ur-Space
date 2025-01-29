import React from "react";
import "./../ProjectPage.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SizzleMidtown1 from "./../../../../Images/Projects/Sizzle Midtown/Sizzle Midtown1.png";
import SizzleMidtown2 from "./../../../../Images/Projects/Sizzle Midtown/Sizzle Midtown2.png";
import SizzleMidtown3 from "./../../../../Images/Projects/Sizzle Midtown/Sizzle Midtown3.png";
import SizzleMidtown4 from "./../../../../Images/Projects/Sizzle Midtown/Sizzle Midtown4.png";
import SizzleMidtown5 from "./../../../../Images/Projects/Sizzle Midtown/Sizzle Midtown5.png";

const ProjectPageCarousel = () => {
  const projectImg = [
    {
      id: 1,
      img: SizzleMidtown1,
      alt: "SizzleMidtown1",
    },
    {
      id: 2,
      img: SizzleMidtown2,
      alt: "SizzleMidtown2",
    },
    {
      id: 3,
      img: SizzleMidtown3,
      alt: "SizzleMidtown3",
    },

    {
      id: 4,
      img: SizzleMidtown4,
      alt: "SizzleMidtown4",
    },
    {
      id: 5,
      img: SizzleMidtown5,
      alt: "SizzleMidtown5",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
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
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {projectImg.map((x) => (
            <div key={x.id}>
              <div className="projectPageCarousel-wrapper">
                <div className="item">
                  <img src={x.img} alt={x.alt} loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectPageCarousel;
