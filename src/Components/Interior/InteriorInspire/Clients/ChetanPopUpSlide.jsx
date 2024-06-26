import React from "react";
import "../InteriorInspire.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chetansLivingroom from "./../../../../Images/chetanLivingroom.jpg";
import chetansBedroom from "./../../../../Images/Chetan'sBeadroom.jpg";
import chetansFalseCeling from "./../../../../Images/Chetan'sFalseCeling.jpg";
import chetansKitchen from "./../../../../Images/Chetan'sKitchen.jpg";
import chetansGod from "./../../../../Images/Chetan'sGod.jpg";
import chetansWardrobe from "./../../../../Images/Chetan'sWardrobe.jpg";
import chetansEntrance from "./../../../../Images/chetan'sEntrance.jpg";
import chetansWardrobe2 from "./../../../../Images/chetan'sWardrobe2.jpg";
import chetansFalseceling2 from "./../../../../Images/chetan'sfalseCeling2.jpg";
import chetansWardrobe3 from "./../../../../Images/chetan'sWardrobe3.jpg";

const ChetanPopUpSlide = () => {
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
          <img src={chetansLivingroom} alt="chetansLivingroom" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={chetansBedroom} alt="chetansBedroom" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={chetansFalseCeling} alt="chetansFalseCeling" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={chetansKitchen} alt="chetansKitchen" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={chetansGod} alt="chetansGod" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={chetansWardrobe} alt="chetansWardrobe" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={chetansEntrance} alt="chetansEntrance" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={chetansWardrobe2} alt="chetansWardrobe2" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={chetansFalseceling2} alt="chetansFalseceling2" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={chetansWardrobe3} alt="chetansWardrobe3" />
        </div>
      </Slider>
    </div>
  );
};

export default ChetanPopUpSlide;
