import React from "react";
import HomeOur1 from "../HomeOur1/HomeOur1";
import OurPhiloList from "./OurPhiloList";

const HomeOurPhilo = () => {
  return (
    <>
      <HomeOur1
        h1="Our"
        h2="Philosophy"
        txt={<OurPhiloList />}
        img="https://images.unsplash.com/photo-1617118600610-dcdf743b3dfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uc3RydWN0aW9uJTIwaGVsbWV0fGVufDB8fDB8fHww"
      />
    </>
  );
};

export default HomeOurPhilo;
