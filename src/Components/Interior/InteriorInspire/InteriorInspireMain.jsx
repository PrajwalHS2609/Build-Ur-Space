import React, { useEffect, useState } from "react";
import "./InteriorInspire.css";
import InteriorInspireCard from "./InteriorInspireCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kiranLivingroom from "./../../../Images/KiranHome/KiranlivingRoom.jpg";
import raja1 from "./../../../Images/RajaShekarHome/rajaLivingroom.jpg";
import chetan1 from "./../../../Images/ChetanHome/chetanLivingroom.jpg";
import gym from "./../../../Images/Gym/gym.jpg";
import clinic from "./../../../Images/Clinic/clinic.jpg";
import office from "./../../../Images/IVR/office.jpg";
import showroom from "./../../../Images/Showroom/showroom.jpg";
import office2 from "./../../../Images/MBanq/office2.jpg";
import InteriorKiran from "./Clients/InteriorKiran";
import InteriorRajaShekar from "./Clients/InteriorRajaShekar";
import InteriorGym from "./Clients/InteriorGym";
import InteriorChetan from "./Clients/InteriorChetan";
import InteriorBanq from "./Clients/InteriorBanq";
import InteriorShowroom from "./Clients/InteriorShowroom";
import InteriorClinic from "./Clients/InteriorClinic";
import InteriorIVR from "./Clients/InteriorIVR";
import ContentLoader from "react-content-loader";

const InteriorInspireMain = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading with a timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout to your needs

    return () => clearTimeout(timer);
  }, []);

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

  if (loading) {
    return <ContentLoader />; // Show the loader while loading
  }
  return (
    <div className="inspireMainContainer">
      <div className="inspireSliderContent">
        <InteriorInspireCard
          img1={kiranLivingroom}
          h1="Mr.Kiran's Home"
          onClick={handleKiran}
        />
        <InteriorInspireCard
          img1={raja1}
          h1="Mr.Rajashekhar's Home"
          onClick={handleRajaShekar}
        />
        <InteriorInspireCard
          img1={chetan1}
          h1="Mr.Chetan's Home"
          onClick={handleChetan}
        />
        <InteriorInspireCard img1={gym} h1="Gym" onClick={handleGym} />
        <InteriorInspireCard img1={clinic} h1="Clinic" onClick={handleClinic} />
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
        <InteriorInspireCard img1={office2} h1="MBanQ" onClick={handleMBanq} />
      </div>
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
