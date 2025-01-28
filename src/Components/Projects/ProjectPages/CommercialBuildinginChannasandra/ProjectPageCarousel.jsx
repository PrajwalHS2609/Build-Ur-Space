import React from "react";
import "./../ProjectPage.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CommercialProjectinChannasandra2 from "./../../../../Images/Commercial Building Construction in Channasandra/CommercialProjectinChannasandra2.png";
import CommercialProjectinChannasandra3 from "./../../../../Images/Commercial Building Construction in Channasandra/CommercialProjectinChannasandra3.jpeg";
import CommercialProjectinChannasandra5 from "./../../../../Images/Commercial Building Construction in Channasandra/CommercialProjectinChannasandra5.png";
import CommercialProjectinChannasandra8 from "./../../../../Images/Commercial Building Construction in Channasandra/CommercialProjectinChannasandra8.jpeg";
import CommercialProjectinChannasandra1 from "./../../../../Images/Commercial Building Construction in Channasandra/CommercialProjectinChannasandra1.png";
import CommercialProjectinChannasandra7 from "./../../../../Images/Commercial Building Construction in Channasandra/CommercialProjectinChannasandra7.png";
const ProjectPageCarousel = () => {
  const projectImg = [
    {
      id: 1,
      img: CommercialProjectinChannasandra1,
      alt: "CommercialProjectinChannasandra1",
    },
    {
      id: 1,
      img: CommercialProjectinChannasandra2,
      alt: "CommercialProjectinChannasandra2",
    },
    {
      id: 2,
      img: CommercialProjectinChannasandra3,
      alt: "CommercialProjectinChannasandra3",
    },
    {
      id: 3,
      img: CommercialProjectinChannasandra5,
      alt: "CommercialProjectinChannasandra5",
    },
    {
      id: 4,
      img: CommercialProjectinChannasandra7,
      alt: "CommercialProjectinChannasandra7",
    },
    {
      id: 5,
      img: CommercialProjectinChannasandra8,
      alt: "CommercialProjectinChannasandra8",
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
