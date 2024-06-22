import React from "react";
import "./InteriorInspire.css";
import InteriorInspireCard from "./InteriorInspireCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rightArrow from "./../../../Images/right.png";
import leftArrow from "./../../../Images/left.png";
import InteriorInspirePopUp from "./InteriorInspirePopUp";
import kiranLivingroom from "./../../../Images/KiranlivingRoom.jpg";
import raja1 from "./../../../Images/rajaLivingroom.jpg";
import chetan1 from "./../../../Images/chetanLivingroom.jpg";
import gym from "./../../../Images/gym.jpg";
import clinic from "./../../../Images/clinic.jpg";
import office from "./../../../Images/office.jpg";
import showroom from "./../../../Images/showroom.jpg";
import office2 from "./../../../Images/office2.jpg"
const InteriorInspireMain = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          borderRadius: "50%",
          backgroundImage: `url(${rightArrow})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "60px",
          width: "60px",
          cursor: "pointer",
          marginTop: "10px",
          position: "absolute",
          right: "-50px",

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
          borderRadius: "50%",
          backgroundImage: `url(${leftArrow})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "60px",
          width: "60px",
          cursor: "pointer",
          position: "absolute",
          left: "-50px",
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
          // background: "#ff2230",
          borderRadius: "50%",
          backgroundImage: `url(${rightArrow})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "30px",
          width: "30px",
          cursor: "pointer",
          marginTop: "10px",
          position: "absolute",
          right: "0px",

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
          // background: "#ff2230",
          borderRadius: "50%",
          backgroundImage: `url(${leftArrow})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "30px",
          width: "30px",
          cursor: "pointer",
          marginTop: "10px",
          position: "absolute",
          left: "0px",
          zIndex: "2",
          // boxShadow: "0 0 10px black",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: false,
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
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: <RespSampleNextArrow />,
          prevArrow: <RespSamplePrevArrow />,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  return (
    <div className="inspireMainContainer">
      <Slider {...settings} className="inspireSliderContainer">
        <div className="inspireSliderContent">
          <InteriorInspireCard
            img1={kiranLivingroom}
            img2={raja1}
            img3={chetan1}
            img4={gym}
            img5={clinic}
            img6={office}
            h1="Kiran"
            h2="Rajashekhar"
            h3="Chetan"
            h4="Gym"
          />
        </div>
        <div className="inspireSliderContent">
          <InteriorInspireCard
            img1={clinic}
            img2={office}
            img3={showroom}
            img4={office2}
            h1="Clinic"
            h2="Brigade IVR"
            h3="Showroom"
            h4="MBanq"
          />
        </div>
       
      </Slider>
      <InteriorInspirePopUp />
    </div>
  );
};

export default InteriorInspireMain;
