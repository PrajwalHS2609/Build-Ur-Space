import React from "react";
import CommercialSectorsCard from "./CommercialSectorsCard";
import "./CommercialInterior.css";
import CommercialSectorsHead from "./CommercialSectorsHead";
import office from "./../../../Images/office.jpg";
import clinic from "./../../../Images/clinic.jpg";
import gym from "./../../../Images/gym.jpg";
import showroom from "./../../../Images/showroom.jpg";
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
          img="https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/commercial-interiors-1668588562-lcjvi/service-we-offer-1668973301-vQJLk/desktop-1668973620-gTiQ9/restaurant-desktop1-1670332699-W0IJj.jpg"
          alt="Hotels"
          head="Hotels & Resturant"
          link=""
        />
        <CommercialSectorsCard
          img="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
