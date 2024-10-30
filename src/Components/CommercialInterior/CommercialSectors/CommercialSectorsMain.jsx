import React from "react";
import CommercialSectorsCard from "./CommercialSectorsCard";
import "./CommercialInterior.css";
import CommercialSectorsHead from "./CommercialSectorsHead";
import office from "./../../../Images/IVR/office.jpg";
import clinic from "./../../../Images/Clinic/clinic.jpg";
import gym from "./../../../Images/Gym/gym.jpg";
import showroom from "./../../../Images/Showroom/showroom.jpg";
import interiorSalon from "./../../../Images/interiorSalon.png";
import interiorRestaurant from "./../../../Images/interiorRestaurant.png";

const CommercialSectorsMain = () => {
  return (
    <div className="commercialMainContainer">
      <CommercialSectorsHead />
      <div className="commercialMainContent">
        <CommercialSectorsCard
          img={office}
          alt="Office"
          head="Office Space"
          link=""
        />
        <CommercialSectorsCard
          img={interiorRestaurant}
          alt="Hotels"
          head="Hotels & Resturant"
          link=""
        />
        <CommercialSectorsCard
          img={interiorSalon}
          alt="Salon"
          head="Salon"
          link=""
        />
        <CommercialSectorsCard
          img={clinic}
          alt="clinic"
          head="Hospitals & Clinic"
          link=""
        />
        <CommercialSectorsCard img={gym} alt="gym" head="Gym" link="" />
        <CommercialSectorsCard
          img={showroom}
          alt="showroom"
          head="ShowRooms"
          link=""
        />
      </div>
    </div>
  );
};

export default CommercialSectorsMain;
