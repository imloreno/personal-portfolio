import React from "react";
import { connect } from "react-redux";
import Image from "../../../../images/profile-a.png";

const Index = ({ theme }) => {
  return (
    <div className={`banner ${theme === "light" && "light-theme"}`}>
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

const mapStateToProps = (store) => ({ theme: store.theme });

// export default index;
export default connect(mapStateToProps, null)(Index);
