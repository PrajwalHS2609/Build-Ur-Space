import React, { Suspense } from "react";
import "./InteriorInspire.css";
// import InteriorInspireCard from "./InteriorInspireCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rightArrow from "./../../../Images/right.png";
import leftArrow from "./../../../Images/left.png";
import kiranLivingroom from "./../../../Images/KiranlivingRoom.jpg";
import raja1 from "./../../../Images/rajaLivingroom.jpg";
import chetan1 from "./../../../Images/chetanLivingroom.jpg";
import gym from "./../../../Images/gym.jpg";
import clinic from "./../../../Images/clinic.jpg";
import office from "./../../../Images/office.jpg";
import showroom from "./../../../Images/showroom.jpg";
import office2 from "./../../../Images/office2.jpg";
import InteriorKiran from "./Clients/InteriorKiran";
import InteriorRajaShekar from "./Clients/InteriorRajaShekar";
import InteriorGym from "./Clients/InteriorGym";
import InteriorChetan from "./Clients/InteriorChetan";
import InteriorBanq from "./Clients/InteriorBanq";
import InteriorShowroom from "./Clients/InteriorShowroom";
import InteriorClinic from "./Clients/InteriorClinic";
import InteriorIVR from "./Clients/InteriorIVR";
const InteriorInspireCard = React.lazy(() => import("./InteriorInspireCard"));

const InteriorInspireMain = () => {
  const handleKiran = () => {
    let popUp = document.querySelector("#kiranPopUp");
    popUp.style.display = "flex";
  };
  const handleRajaShekar = () => {
    let popUp = document.querySelector("#rajaPopUp");
    popUp.style.display = "flex";
  };
  const handleChetan = () => {
    let popUp = document.querySelector("#chetanPopUp");
    popUp.style.display = "flex";
  };

  const handleGym = () => {
    let popUp = document.querySelector("#gymPopUp");
    popUp.style.display = "flex";
  };
  const handleClinic = () => {
    let popUp = document.querySelector("#clinicPopUp");
    popUp.style.display = "flex";
  };
  const handleIVR = () => {
    let popUp = document.querySelector("#ivrPopUp");
    popUp.style.display = "flex";
  };
  const handleShowroom = () => {
    let popUp = document.querySelector("#showRoomPopUp");
    popUp.style.display = "flex";
  };
  const handleMBanq = () => {
    let popUp = document.querySelector("#banqPopUp");
    popUp.style.display = "flex";
  };
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
        <div>
          <div className="inspireSliderContent">
            <Suspense fallback={<p>Loading....</p>}>
              <InteriorInspireCard
                img1={kiranLivingroom}
                h1="Mr.Kiran's Home"
                onClick={handleKiran}
              />
            </Suspense>
            <Suspense fallback={<p>Loading....</p>}>
              <InteriorInspireCard
                img1={raja1}
                h1="Mr.Rajashekhar's Home"
                onClick={handleRajaShekar}
              />
            </Suspense>

            <Suspense fallback={<p>Loading....</p>}>
              <InteriorInspireCard
                img1={chetan1}
                h1="Mr.Chetan's Home"
                onClick={handleChetan}
              />
            </Suspense>

            <Suspense fallback={<p>Loading....</p>}>
              <InteriorInspireCard img1={gym} h1="Gym" onClick={handleGym} />
            </Suspense>
          </div>
        </div>
        <div>
          <div className="inspireSliderContent">
            <InteriorInspireCard
              img1={clinic}
              h1="Clinic"
              onClick={handleClinic}
            />
            <InteriorInspireCard
              img1={office}
              h1="Brigade IVR"
              onClick={handleIVR}
            />
            <InteriorInspireCard
              img1={showroom}
              h1="showroom"
              onClick={handleShowroom}
            />
            <InteriorInspireCard
              img1={office2}
              h1="MBanQ"
              onClick={handleMBanq}
            />
          </div>
        </div>
      </Slider>
      <InteriorKiran />
      <InteriorRajaShekar />
      <InteriorChetan />
      <InteriorGym />
      <InteriorClinic />
      <InteriorShowroom />
      <InteriorIVR />
      <InteriorBanq />
    </div>
  );
};

export default InteriorInspireMain;
