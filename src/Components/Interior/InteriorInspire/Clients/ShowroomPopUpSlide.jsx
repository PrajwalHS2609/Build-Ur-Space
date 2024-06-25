import React from 'react'
import "../InteriorInspire.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import showroomInterior1 from "./../../../../Images/showRoom1.jpg"
import showroomInterior2 from "./../../../../Images/showRoom2.jpg"
import showroomInterior3 from "./../../../../Images/showRoom3.jpg"
import showroomInterior4 from "./../../../../Images/showRoom4.jpg"
import showroomInterior5 from "./../../../../Images/showRoom5.jpg"

const ShowroomPopUpSlide = () => {
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
        <img src={showroomInterior1} alt="showroomInterior1" />
      </div>
      <div className="inspireSliderPopContent">
        <img src={showroomInterior2} alt="showroomInterior2" />
      </div>
      <div className="inspireSliderPopContent">
        <img src={showroomInterior3} alt="showroomInterior3" />
      </div>
      <div className="inspireSliderPopContent">
        <img src={showroomInterior4} alt="showroomInterior4" />
      </div>
      <div className="inspireSliderPopContent">
        <img src={showroomInterior5} alt="showroomInterior5" />
      </div>
    </Slider>
  </div>
  )
}

export default ShowroomPopUpSlide
