import React from 'react'
import "../InteriorInspire.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IVRInterior1 from "./../../../../Images/IRV1.jpg"
import IVRInterior2 from "./../../../../Images/IRV2.jpg"
import IVRInterior3 from "./../../../../Images/IRV3.jpg"
import IVRInterior4 from "./../../../../Images/IRV4.jpg"
import IVRInterior5 from "./../../../../Images/IRV5.jpg"

const IVRPopUpSlide = () => {
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
          <img src={IVRInterior1} alt="IVRInterior1" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={IVRInterior2} alt="IVRInterior2" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={IVRInterior3} alt="IVRInterior3" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={IVRInterior4} alt="IVRInterior4" />
        </div>
        <div className="inspireSliderPopContent">
          <img src={IVRInterior5} alt="IVRInterior5" />
        </div>
      </Slider>
    </div>
  )
}

export default IVRPopUpSlide
