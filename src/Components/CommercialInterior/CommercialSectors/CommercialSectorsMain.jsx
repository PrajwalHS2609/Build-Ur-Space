import React from "react";
import CommercialSectorsCard from "./CommercialSectorsCard";
import "./CommercialInterior.css";
import CommercialSectorsHead from "./CommercialSectorsHead";
const CommercialSectorsMain = () => {
  return (
    <div className="commercialMainContainer">
      <CommercialSectorsHead />
      <div className="commercialMainContent">
        <CommercialSectorsCard
          img="https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/commercial-interiors-1668588562-lcjvi/service-we-offer-1668973301-vQJLk/desktop-1668973620-gTiQ9/offices-1668973679-8aDwO.png"
          head="Office Space"
          link=""
        />
        <CommercialSectorsCard
          img="https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/commercial-interiors-1668588562-lcjvi/service-we-offer-1668973301-vQJLk/desktop-1668973620-gTiQ9/restaurant-desktop1-1670332699-W0IJj.jpg"
          head="Hotels & Resturant"
          link=""
        />
        <CommercialSectorsCard
          img="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          head="Salon"
          link=""
        />
        <CommercialSectorsCard
          img="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          head="Hospitals & Clinic"
          link=""
        />
        <CommercialSectorsCard
          img="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          head="Gym"
          link=""
        />
        <CommercialSectorsCard
          img="https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/commercial-interiors-1668588562-lcjvi/service-we-offer-1668973301-vQJLk/desktop-1668973620-gTiQ9/retail-stores-1668973676-SuF8A.png"
          head="Retail Outlets"
          link=""
        />
      </div>
    </div>
  );
};

export default CommercialSectorsMain;
