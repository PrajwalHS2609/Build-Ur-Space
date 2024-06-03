import React from "react";

const WhereToFindCard = () => {
  return (
    <div className="whereContainerCard">
      <div className="whereContentCard1">
        <div className="whereMap">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3851.127243886911!2d76.88822907511697!3d15.151355085402976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDA5JzA0LjkiTiA3NsKwNTMnMjYuOSJF!5e0!3m2!1sen!2sin!4v1717437126876!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="whereContentCard2">
        <h1>
          Sri Harsha <span> Build Ur Space</span>: Bellary location:
        </h1>
        <p>
          Sri Harsha <span>Build Ur Space</span>: #9, block H, v nagappa colony,
          hospet road, cantonment, Bellary, karnataka - 583104
        </p>
      </div>
    </div>
  );
};

export default WhereToFindCard;
