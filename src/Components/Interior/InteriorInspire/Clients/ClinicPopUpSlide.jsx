import React from "react";
import "../InteriorInspire.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clinicInterior1 from "./../../../../Images/Clinic/clinic1.jpg"
import clinicInterior2 from "./../../../../Images/Clinic/clinic2.jpg"
import clinicInterior3 from "./../../../../Images/Clinic/clinic3.jpg"
import clinicInterior4 from "./../../../../Images/Clinic/clinic4.jpg"
import clinicInterior5 from "./../../../../Images/Clinic/clinic5.jpg"
import clinicInterior6 from "./../../../../Images/Clinic/clinic.jpg"
import clinicInterior7 from "./../../../../Images/Clinic/clinicInterior7.jpg"
import clinicInterior8 from "./../../../../Images/Clinic/clinicInterior8.jpg"
import clinicInterior9 from "./../../../../Images/Clinic/clinicInterior9.jpg"
import clinicInterior10 from "./../../../../Images/Clinic/clinicInterior10.jpg"


const ClinicPopUpSlide = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          //   borderRadius: "50%",
          //   backgroundColor: "white",
          //   backgroundImage: `url(${rightArrow})`,
          //   backgroundSize: "contain",
          //   backgroundRepeat: "no-repeat",
          height: "60px",
          width: "60px",
          cursor: "pointer",
          position: "absolute",
          transform: "scale(1.5)",
          right: "-100px",

          // boxShadow: "0 0 10px black",
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
          //   background: "#ff2230",
          //   borderRadius: "50%",
          //   backgroundImage: `url(${leftArrow})`,
          //   backgroundColor: "white",
          //   backgroundSize: "contain",
          //   backgroundRepeat: "no-repeat",
          height: "60px",
          width: "60px",
          cursor: "pointer",
          position: "absolute",
          left: "-50px",
          transform: "scale(1.5)",
          // boxShadow: "0 0 10px black",
        }}
        onClick={onClick}
      />
    );
  }
  function RespSampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          //   borderRadius: "50%",
          //   backgroundColor: "white",
          //   backgroundImage: `url(${rightArrow})`,
          //   backgroundSize: "contain",
          //   backgroundRepeat: "no-repeat",
          height: "60px",
          width: "60px",
          cursor: "pointer",
          position: "absolute",
          transform: "scale(1.5)",
          right: "-90px",

          // boxShadow: "0 0 10px black",
        }}
        onClick={onClick}
      />
    );
  }
  function RespSamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          //   background: "#ff2230",
          //   borderRadius: "50%",
          //   backgroundImage: `url(${leftArrow})`,
          //   backgroundColor: "white",
          //   backgroundSize: "contain",
          //   backgroundRepeat: "no-repeat",
          height: "60px",
          width: "60px",
          cursor: "pointer",
          position: "absolute",
          left: "-30px",
          transform: "scale(1.5)",
          // boxShadow: "0 0 10px black",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: <RespSampleNextArrow />,
          prevArrow: <RespSamplePrevArrow />,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="interiorPopSlider">
      <Slider {...settings} className="inspireSliderPopContainer">
        <div className="inspireSliderPopContent">
          <img src={clinicInterior1} alt="clinicInterior1" loading="lazy"/>
        </div>
        <div className="inspireSliderPopContent">
          <img src={clinicInterior2} alt="clinicInterior2" loading="lazy"/>
        </div>
        <div className="inspireSliderPopContent">
          <img src={clinicInterior3} alt="clinicInterior3" loading="lazy"/>
        </div>
        <div className="inspireSliderPopContent">
          <img src={clinicInterior4} alt="clinicInterior4" loading="lazy"/>
        </div>
        <div className="inspireSliderPopContent">
          <img src={clinicInterior5} alt="clinicInterior5" loading="lazy"/>
        </div>
        <div className="inspireSliderPopContent">
          <img src={clinicInterior6} alt="clinicInterior6" loading="lazy"/>
        </div>
        <div className="inspireSliderPopContent">
          <img src={clinicInterior7} alt="clinicInterior7" loading="lazy"/>
        </div>
        <div className="inspireSliderPopContent">
          <img src={clinicInterior8} alt="clinicInterior8" loading="lazy"/>
        </div>
        <div className="inspireSliderPopContent">
          <img src={clinicInterior9} alt="clinicInterior9" loading="lazy"/>
        </div>
        <div className="inspireSliderPopContent">
          <img src={clinicInterior10} alt="clinicInterior10" loading="lazy"/>
        </div>
      </Slider>
    </div>
  );
};

export default ClinicPopUpSlide;
