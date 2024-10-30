import React from "react";
import "../InteriorInspire.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mBanqInterior1 from "./../../../../Images/MBanq/mBanq1.jpg";
import mBanqInterior2 from "./../../../../Images/MBanq/mBanq2.jpg";
import mBanqInterior3 from "./../../../../Images/MBanq/mBanq3.jpg";
import mBanqInterior4 from "./../../../../Images/MBanq/mBanq4.jpg";
import mBanqInterior5 from "./../../../../Images/MBanq/mBanq5.jpg";
import mBanqInterior6 from "./../../../../Images/MBanq/office2.jpg";
import mBanqInterior7 from "./../../../../Images/MBanq/mBanqInterior7.jpg";
import mBanqInterior8 from "./../../../../Images/MBanq/mBanqInterior8.jpg";
import mBanqInterior9 from "./../../../../Images/MBanq/mBanqInterior9.jpg";
import mBanqInterior10 from "./../../../../Images/MBanq/mBanqInterior10.jpg";

const BanqPopUpSlide = () => {
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
          <img src={mBanqInterior1} alt="mBanqInterior1" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={mBanqInterior2} alt="mBanqInterior2" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={mBanqInterior3} alt="mBanqInterior3" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={mBanqInterior4} alt="mBanqInterior4" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={mBanqInterior5} alt="mBanqInterior5" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={mBanqInterior6} alt="mBanqInterior6" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={mBanqInterior7} alt="mBanqInterior7" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={mBanqInterior8} alt="mBanqInterior8" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={mBanqInterior9} alt="mBanqInterior9" loading="lazy" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={mBanqInterior10} alt="mBanqInterior10" loading="lazy" />
        </div>
      </Slider>
    </div>
  );
};

export default BanqPopUpSlide;
