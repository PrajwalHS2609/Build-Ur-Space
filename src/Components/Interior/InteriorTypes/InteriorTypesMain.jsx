import React from "react";
import "./InteriorTypes.css";
import InteriorTypesCard from "./InteriorTypesCard";
// import right from "./../../../Images/right.png";
// import left from "./../../../Images/left.png";
const InteriorTypesMain = () => {
  return (
    <div className="interiorTypeMainContainer">
      <InteriorTypesCard
        img="https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/modular-1-1682066917-W5NcL.jpg"
        head="Modular Interior"
        para="Functional Kitchen,Wardrobe and Storage"
      />
      <InteriorTypesCard
        img="https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/full-home-1682066987-lk16r.jpg"
        head="Full Home Interiors"
        para="TurnKey interior solutions for you home"
      />

      <InteriorTypesCard
        img="https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/reno-1682066988-lqJkS.jpg"
        head="Renovations"
        para="Expert Solutions to upgrade your home"
      />
      <InteriorTypesCard
        link="/commercial-interior-design"
        img="https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/commercial-1682066986-5w6x0.jpg"
        head="Commercial Interiors"
        para=" Hassle-free solutions fro your workspace"
      />
    </div>
  );
};

export default InteriorTypesMain;
