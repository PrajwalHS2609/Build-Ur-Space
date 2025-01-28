import React from "react";
import "./../ProjectPage.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ResidentialProjectinJakkur3 from "./../../../../Images/Residential House Construction at Jakkur/ResidentialProjectinJakkur3.jpg";
import ResidentialProjectinJakkur4 from "./../../../../Images/Residential House Construction at Jakkur/ResidentialProjectinJakkur4.jpg";
import ResidentialProjectinJakkur5 from "./../../../../Images/Residential House Construction at Jakkur/ResidentialProjectinJakkur5.jpg";
import ResidentialProjectinJakkur8 from "./../../../../Images/Residential House Construction at Jakkur/ResidentialProjectinJakkur8.jpg";
import ResidentialProjectinJakkur11 from "./../../../../Images/Residential House Construction at Jakkur/ResidentialProjectinJakkur11.jpg";
import ResidentialProjectinJakkur14 from "./../../../../Images/Residential House Construction at Jakkur/ResidentialProjectinJakkur14.jpg";

const ProjectPageCarousel = () => {
  const projectImg = [

    {
      id: 3,
      img: ResidentialProjectinJakkur3,
      alt: "ResidentialProjectinJakkur3",
    },
    {
      id: 4,
      img: ResidentialProjectinJakkur4,
      alt: "ResidentialProjectinJakkur4",
    },
    {
      id: 5,
      img: ResidentialProjectinJakkur5,
      alt: "ResidentialProjectinJakkur5",
    },

    {
      id: 8,
      img: ResidentialProjectinJakkur8,
      alt: "ResidentialProjectinJakkur8",
    },
    {
      id: 9,
      img: ResidentialProjectinJakkur11,
      alt: "ResidentialProjectinJakkur11",
    },
    {
      id: 10,
      img: ResidentialProjectinJakkur14,
      alt: "ResidentialProjectinJakkur14",
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
          removeArrowOnDeviceType={["tablet", "mobile",]}
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
