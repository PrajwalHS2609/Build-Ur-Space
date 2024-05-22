import React from "react";
import "./HomeServices.css";
import HomeServiceCard from "./HomeServiceCard";
const HomeServicesMain = () => {
  return (
    <div className="homeServiceMainContainer">
      <HomeServiceCard
        img="https://images.unsplash.com/photo-1593012672015-4fabc32c67aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
        txt="Home Construction"
      />
      <HomeServiceCard
        img="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        txt="Home Interior"
      />
    </div>
  );
};

export default HomeServicesMain;
