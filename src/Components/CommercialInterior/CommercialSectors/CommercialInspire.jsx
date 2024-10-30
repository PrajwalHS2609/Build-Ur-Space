import React, { useEffect, useState } from "react";
import InteriorInspireCard from "../../Interior/InteriorInspire/InteriorInspireCard";
import gym from "./../../../Images/Gym/gym.jpg";
import clinic from "./../../../Images/Clinic/clinic.jpg";
import office from "./../../../Images/office.jpg";
import showroom from "./../../../Images/Showroom/showroom.jpg";
import office2 from "./../../../Images/MBanq/office2.jpg";
import ContentLoader from "react-content-loader";
import InteriorGym from "../../Interior/InteriorInspire/Clients/InteriorGym";
import InteriorClinic from "../../Interior/InteriorInspire/Clients/InteriorClinic";
import InteriorShowroom from "../../Interior/InteriorInspire/Clients/InteriorShowroom";
import InteriorIVR from "../../Interior/InteriorInspire/Clients/InteriorIVR";
import InteriorBanq from "../../Interior/InteriorInspire/Clients/InteriorBanq";
const CommercialInspire = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading with a timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout to your needs

    return () => clearTimeout(timer);
  }, []);

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
      <div className="inspireHeadContainer">
        <h2>
          Inspiration for <span>Commercial Interiors</span> designs
        </h2>
        <p>
          Transform Your Commercial Space with These Modern Interior Design
          Ideas Curated for You
        </p>
      </div>
      <div className="inspireSliderContent">
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
      <InteriorGym />
      <InteriorClinic />
      <InteriorShowroom />
      <InteriorIVR />
      <InteriorBanq />
    </div>
  );
};

export default CommercialInspire;
