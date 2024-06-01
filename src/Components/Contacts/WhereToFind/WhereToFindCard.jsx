import React from "react";

const WhereToFindCard = () => {
  return (
    <div className="whereContainerCard">
      <div className="whereContentCard1">
        <div className="whereMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.934069826297!2d77.56212297484261!3d13.039868587281816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e378ea5f21%3A0x1067839d22db62e4!2sbuildAhome!5e0!3m2!1sen!2sin!4v1717250506308!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{"border":"0"}}className="map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="whereContentCard2">
        <h2>Bangalore Office:</h2>
        <p>
          buildAhome, 552, 7th Main Road, AGS Layout, Dollars Colony, R.M.V. 2nd
          Stage, Bengaluru, Karnataka 560094
        </p>
      </div>
    </div>
  );
};

export default WhereToFindCard;
