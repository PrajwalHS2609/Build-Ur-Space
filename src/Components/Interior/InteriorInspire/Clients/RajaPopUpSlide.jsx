import React from "react";
import "../InteriorInspire.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rajasLivingroom from "./../../../../Images/RajaShekarHome/rajaLivingroom.jpg";
import rajaShekarsEntrance from "./../../../../Images/RajaShekarHome/RajaShekhar'sEnterance.jpg";
import rajaShekarsBedroom from "./../../../../Images/RajaShekarHome/RajaShekhar'sBeadroom.jpg";
import rajaShekarsWall from "./../../../../Images/RajaShekarHome/RajaShekhar'sWall.jpg";
import rajaShekarsFalseCeling from "./../../../../Images/RajaShekarHome/RajaShekhar'sfalseCeling.jpg";
import rajaShekarsGod from "./../../../../Images/RajaShekarHome/RajaShekhar'sGod.jpg";
import rajasLivingroom2 from "./../../../../Images/RajaShekarHome/raja'slLivingRoom2.jpg";
import rajasLivingRoom3 from "./../../../../Images/RajaShekarHome/raja'slLivingRoom3.jpg";
import rajasLivingRoom4 from "./../../../../Images/RajaShekarHome/raja'slLivingRoom4.jpg";
import rajasBedRoom2 from "./../../../../Images/RajaShekarHome/raja'sBedroom2.jpg";

const RajaPopUpSlide = () => {
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
          zIndex: "3",

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
          <img src={rajasLivingroom} alt="rajasLivingroom" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img
            src={rajaShekarsEntrance}
            alt="rajaShekarsEntrance"
            loading="lazy"
          />
        </div>
        <div className="inspireSliderPopContent">
          <img
            src={rajaShekarsBedroom}
            alt="rajaShekarsBedroom"
            loading="lazy"
          />
        </div>
        <div className="inspireSliderPopContent">
          <img src={rajasLivingroom2} alt="rajasLivingroom2" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={rajaShekarsWall} alt="rajaShekarsWall" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={rajasLivingRoom3} alt="rajasLivingRoom3" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img
            src={rajaShekarsFalseCeling}
            alt="rajaShekarsFalseCeling"
            loading="lazy"
          />
        </div>
        <div className="inspireSliderPopContent">
          <img src={rajaShekarsGod} alt="rajaShekarsGod" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={rajasLivingRoom4} alt="rajasLivingRoom4" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={rajasBedRoom2} alt="rajasBedRoom2" loading="lazy" />
        </div>
      </Slider>
    </div>
  );
};

export default RajaPopUpSlide;
