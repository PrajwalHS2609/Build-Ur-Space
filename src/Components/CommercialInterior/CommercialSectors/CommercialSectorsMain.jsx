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
          img="https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/commercial-interiors-1668588562-lcjvi/service-we-offer-1668973301-vQJLk/desktop-1668973620-gTiQ9/retail-stores-1668973676-SuF8A.png"
          head="Salon"
          link=""
        />
        <CommercialSectorsCard
          img="https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/commercial-interiors-1668588562-lcjvi/service-we-offer-1668973301-vQJLk/desktop-1668973620-gTiQ9/residentialamenities-desktop1-1670332697-8KHm1.jpg"
          head="Hospitals & Clinic"
          link=""
        />
        <CommercialSectorsCard
          img="https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/commercial-interiors-1668588562-lcjvi/service-we-offer-1668973301-vQJLk/desktop-1668973620-gTiQ9/bulkmodularsolutions-desktop1-1670332694-tFNXI.jpg"
          head="Gym"
          link=""
        />
        <CommercialSectorsCard
          img="https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/commercial-interiors-1668588562-lcjvi/service-we-offer-1668973301-vQJLk/desktop-1668973620-gTiQ9/warehouses-1668973674-xWi9k.png"
          head="Retail Outlets"
          link=""
        />
      </div>
    </div>
  );
};

export default CommercialSectorsMain;
