import React from "react";
import "../InteriorInspire.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gymInterior6 from "./../../../../Images/Gym/gym.jpg";
import gymInterior1 from "./../../../../Images/Gym/gymInterior1.jpg";
import gymInterior2 from "./../../../../Images/Gym/gymInterior2.jpg";
import gymInterior3 from "./../../../../Images/Gym/gymInterior3.jpg";
import gymInterior4 from "./../../../../Images/Gym/gymInterior4.jpg";
import gymInterior5 from "./../../../../Images/Gym/gymInterior5.jpg";
import gymInterior7 from "./../../../../Images/Gym/gymInterior7.jpg";
import gymInterior8 from "./../../../../Images/Gym/gymInterior8.jpg";
import gymInterior9 from "./../../../../Images/Gym/gymInterior9.jpg";
const GymPopUpSlide = () => {
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
          <img src={gymInterior6} alt="gymInterior6" loading="lazy"/>
        </div>
        <div className="inspireSliderPopContent">
          <img src={gymInterior1} alt="gymInterior1" loading="lazy"/>
        </div>
        <div className="inspireSliderPopContent">
          <img src={gymInterior2} alt="gymInterior2" loading="lazy"/>
        </div>
        <div className="inspireSliderPopContent">
          <img src={gymInterior3} alt="gymInterior3" loading="lazy"/>
        </div>
        <div className="inspireSliderPopContent">
          <img src={gymInterior4} alt="gymInterior4" loading="lazy"/>
        </div>
        <div className="inspireSliderPopContent">
          <img src={gymInterior5} alt="gymInterior5" loading="lazy"/>
        </div>
        <div className="inspireSliderPopContent">
          <img src={gymInterior7} alt="gymInterior7" loading="lazy"/>
        </div>
        <div className="inspireSliderPopContent">
          <img src={gymInterior8} alt="gymInterior8" loading="lazy"/>
        </div>
        <div className="inspireSliderPopContent">
          <img src={gymInterior9} alt="gymInterior9" loading="lazy"/>
        </div>
      </Slider>
    </div>
  );
};

export default GymPopUpSlide;
