import React from "react";
import "./InteriorTypes.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InteriorTypesCard from "./InteriorTypesCard";
import right from "./../../../Images/right.png";
import left from "./../../../Images/left.png";
const InteriorTypesMain = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "transparent",
          borderRadius: "100%",
          backgroundImage: `url(${right})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "10px",
          backgroundSize: "contain",
          height: "50px",
          width: "40px",
          right: "-40px",
          position: "absolute",
          zIndex: "4",
          cursor: "pointer",
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
          display: "block",
          textAlign: "center",
          background: "transparent",
          backgroundImage: `url(${left})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPositionY: "10px",
          height: "50px",
          width: "40px",
          position: "absolute",
          left: "-40px",

          zIndex: "4",
          cursor: "pointer",
          boxShadow: "inherit 0, 0, 10px, black",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="interiorTypeMainContainer">
      <Slider {...settings}>
        <div className="interiorTypeMainContent">
          <InteriorTypesCard
            img="https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/modular-1-1682066917-W5NcL.jpg"
            head="Modular Interior"
            para="Functional Kitchen,Wardrobe and Storage"
          />
        </div>
        <div className="interiorTypeMainContent">
          <InteriorTypesCard
            img="https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/full-home-1682066987-lk16r.jpg"
            head="Full Home Interiors"
            para="TurnKey interior solutions for you home"
          />
        </div>
        {/* <div className="interiorTypeMainContent">
          <InteriorTypesCard
            img="https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/vinviago-desk-1692618545-ToZjR.jpg"
            head="Luxury Interiors"
            para="Tailored interiors that redefined elegance"
          />
        </div> */}
        <div className="interiorTypeMainContent">
          <InteriorTypesCard
            img="https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/reno-1682066988-lqJkS.jpg"
            head="Renovations"
            para="Expert Solutions to upgrade your home"
          />
        </div>
        <div className="interiorTypeMainContent">
          <InteriorTypesCard
            img="https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/commercial-1682066986-5w6x0.jpg"
            head="Commercial Interiors"
            para=" Hassle-free solutions fro your workspace"
          />
        </div>
      </Slider>
    </div>
  );
};

export default InteriorTypesMain;
