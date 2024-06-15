import React from "react";
import "./InteriorInspire.css";
import InteriorInspireCard from "./InteriorInspireCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rightArrow from "./../../../Images/right.png";
import leftArrow from "./../../../Images/left.png";
import InteriorInspirePopUp from "./InteriorInspirePopUp";

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
          height: "20px",
          width: "20px",
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
          height: "20px",
          width: "20px",
          cursor: "pointer",
          marginTop: "10px",
          position: "absolute",
          left: "0px",
          zIndex:"2"
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
          slidesToShow: 1,
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
            img1="https://images.livspace-cdn.com/w:700/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/living-room-d-1689150613-oIGOU.jpg"
            img2="https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/master-bedroom-d-1689150615-GAvUx.jpg"
            img3="https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/false-ceiling-designs-web-1694434017-5JzRp.jpg"
            img4="https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/homes-by-livspace-web-1694434020-x7mxm.jpg"
            img5="https://images.livspace-cdn.com/w:700/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/kitchen-d-1689150612-ouirR.jpg"
            img6="https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/wardrobe-d-1689150619-VfOcJ.jpg"
            h1="Living Room"
            h2="Master Bedroom"
            h3="False Ceiling"
            h4="Homes by BuildUrSpace"
            h5="Kitchen"
            h6="Wardrobe"
          />
        </div>
        <div className="inspireSliderContent">
          <InteriorInspireCard
            img1="https://images.livspace-cdn.com/w:700/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/kids-bedroom-d-1689150610-UnlVi.jpg"
            img2="https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/home-office-d-1689150608-RHLV9.jpg"
            img3="https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/guest-bedroom-d-1689150606-C0wy5.jpg"
            img4="https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/foyer-d-1689150511-1Prr3.jpg"
            img5="https://images.livspace-cdn.com/w:700/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/dining-room-d-1689150498-HC3VH.jpg"
            img6="https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/bathroom-d-1669044076-ZlOfj.jpg"
            h1="Kids Room"
            h2="Home Office"
            h3="Guest Bedroom"
            h4="Foyer"
            h5="Dinning Room"
            h6="Bathroom"
          />
        </div>
      </Slider>
      <InteriorInspirePopUp />
    </div>
  );
};

export default InteriorInspireMain;
