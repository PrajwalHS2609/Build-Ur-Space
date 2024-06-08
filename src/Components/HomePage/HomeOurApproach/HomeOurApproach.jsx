import React from "react";
import HomeOur1 from "../HomeOur/HomeOur1";
import  ourApproach from "../../../Images/ourApproach.jpg"
const HomeOurApproach = () => {
  return (
    <>
      <HomeOur1
        h1="OUR"
        h2="APPROACH"
        txt=" We have adopted the “turnkey approach” to construction, that is, we
      both do the design and implementation so that you don’t need to
      worry about anything."
        img={ourApproach}
      />
    </>
  );
};

export default HomeOurApproach;
