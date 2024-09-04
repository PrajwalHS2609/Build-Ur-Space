import React from "react";
import "../InteriorInspire.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kiransLivingroom from "./../../../../Images/KiranlivingRoom.jpg";
import kiransKitchen from "./../../../../Images/Kiran'skitchen.jpg";
import kiransBedroom from "./../../../../Images/Kiran'sbedroom.jpg";
import kiransBathroom from "./../../../../Images/Kiran'sbathroom.jpg";
import kiransWardrobe from "./../../../../Images/Kiran'swardrobe.jpg";
import kiransFalseCeling from "./../../../../Images/Kiran'sfalseCeling.jpg";
import kiransSink from "./../../../../Images/kiran'sSink.jpg";
import kiransSeat from "./../../../../Images/kiran'stSeat.jpg";
import kiransCorridor from "./../../../../Images/kiran'sCorridor.jpg";
import kiransStairs from "./../../../../Images/kiran'sStairs.jpg";

const KiranPopUpSlide = () => {
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
          zIndex: "3",
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
          zIndex: "3",
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
          <img src={kiransLivingroom} alt="kiransLivingroom" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={kiransKitchen} alt="kiransKitchen" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={kiransBedroom} alt="kiransBedroom" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={kiransBathroom} alt="kiransBathroom" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={kiransWardrobe} alt="kiransWardrobe" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={kiransFalseCeling} alt="kiransFalseCeling" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={kiransSink} alt="kiransSink" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={kiransSeat} alt="kiransSeat" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={kiransCorridor} alt="kiransCorridor" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={kiransStairs} alt="kiransStairs" loading="lazy" />
        </div>
      </Slider>
    </div>
  );
};

export default KiranPopUpSlide;
