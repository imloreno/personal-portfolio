import React from "react";
import Image from "../../../../images/profile-a.png";

const index = () => {
  return (
    <div className="banner">
      <div className="banner__title-contaniner">
        <h1 className="banner__title">
          <span className="banner__title--bg">LOR</span>ENZO
        </h1>
        <p className="banner__subtitle">portafolio personal</p>
      </div>
      <div className="banner__photo">
        <img src={Image} alt="" className="banner__photo-img" />
      </div>
    </div>
  );
};

export default index;
