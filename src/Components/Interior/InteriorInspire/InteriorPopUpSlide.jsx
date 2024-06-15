import React from "react";
import "./InteriorInspire.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rightArrow from "./../../../Images/right.png";
import leftArrow from "./../../../Images/left.png";
const InteriorPopUpSlide = () => {
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
          marginTop: "10px",
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
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="interiorPopSlider">
      <Slider {...settings} className="inspireSliderPopContainer">
        <div className="inspireSliderPopContent">
          <img
            src="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/living-room-1712816585-gZ0OZ/lr9-1712817729-OYh9m.jpg"
            alt=""
          />
        </div>
        <div className="inspireSliderPopContent">
          <img
            src="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/living-room-1712816585-gZ0OZ/lr9-1712817729-OYh9m.jpg"
            alt=""
          />
        </div>
        <div className="inspireSliderPopContent">
          <img
            src="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/living-room-1712816585-gZ0OZ/lr9-1712817729-OYh9m.jpg"
            alt=""
          />
        </div>
        <div className="inspireSliderPopContent">
          <img
            src="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/living-room-1712816585-gZ0OZ/lr9-1712817729-OYh9m.jpg"
            alt=""
          />
        </div>
        <div className="inspireSliderPopContent">
          <img
            src="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/living-room-1712816585-gZ0OZ/lr9-1712817729-OYh9m.jpg"
            alt=""
          />
        </div>
        <div className="inspireSliderPopContent">
          <img
            src="https://images.livspace-cdn.com/w:768/h:400/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/living-room-1712816585-gZ0OZ/lr9-1712817729-OYh9m.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default InteriorPopUpSlide;
