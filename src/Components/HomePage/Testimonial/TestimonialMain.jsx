import React from "react";
import "./Testimonial.css";
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
const TestimonialMain = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "#ff2230",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "14px",
          height: "40px",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "#ff2230",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          height: "40px",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="testiMainContainer">
      <Slider {...settings}>
        <div className="testiMainContent">
          <TestimonialCard
            para="I had the pleasure of working with Build ur Space on a multistory
        project. The team was incredibly knowledgeable, experienced, and
        professional from start to finish. They brought my vision to life, and
        the final result exceeded all my expectations. Throughout the process,
        the director, Mr. SriHarsha, kept me informed, addressed all my
        questions, and promptly resolved any issues. The construction crew was
        quick, courteous, and consistently maintained a neat and organized
        workspace, ensuring minimal disruption to my daily routine."
            name="- Dr.Srinivas Prasad R.H"
          />
        </div>
        <div className="testiMainContent">
          <TestimonialCard
            para="Thank you for building our dream home. The project was managed professionally, with everything organized and on track. We received excellent support with paperwork and administrative procedures. If you're looking for exceptional quality, outstanding customer service, and a commitment to innovation, Build ur Space is the company for you. Their expertise and attention to detail ensure that your new home will be built to the highest standards, with your satisfaction as their top priority."
            name="-Amith"
          />
        </div>
        <div className="testiMainContent">
          <TestimonialCard
            para="We contacted them for the interior work of our house. They understood our requirements, provided designs accordingly, and executed the final work precisely as we envisioned."
            name=" - Ravichandra"
          />
        </div>
        <div className="testiMainContent">
          <TestimonialCard para="" name="" />
        </div>
        <div className="testiMainContent">
          <TestimonialCard para="" name="" />
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialMain;
