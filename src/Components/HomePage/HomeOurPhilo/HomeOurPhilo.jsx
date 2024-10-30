import React from "react";
import OurPhiloList from "./OurPhiloList";
import HomeOur2 from "../HomeOur/HomeOur2";
import ourPhilo  from "../../../Images/AboutUs/ourPhilo.jpg"
const HomeOurPhilo = () => {
  return (
    <>
      <HomeOur2
        h1="OUR"
        h2="PHILOSOPHY"
        txt={<OurPhiloList />}
        img={ourPhilo}
      />
    </>
  );
};

export default HomeOurPhilo;
