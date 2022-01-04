import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Image from "../../../../images/profile-a.png";
import SignatureSvg from "./SignatureSvg";

const Index = (props) => {
  const { theme, scroll } = props;
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
      <div className="banner__reference">
        <a
          className="banner__link"
          href="https://www.facebook.com/Sanc7us/"
          rel="noreferrer"
          target="_blank"
        >
          <Icon icon={faFacebook} />
        </a>
        <a
          className="banner__link"
          href="https://github.com/SoySanty"
          rel="noreferrer"
          target="_blank"
        >
          <Icon icon={faGithub} />
        </a>
        <a
          className="banner__link"
          href="https://api.whatsapp.com/send/?phone=59169141407&text=Hola"
          rel="noreferrer"
          target="_blank"
        >
          <Icon icon={faWhatsapp} />
        </a>
        <a
          className="banner__link"
          href="https://twitter.com/Sanc7us"
          rel="noreferrer"
          target="_blank"
        >
          <Icon icon={faTwitter} />
        </a>
      </div>
      <div className="signature">
        <SignatureSvg />
      </div>
      <div className="banner__showmore" onClick={scroll}>
        <p className="banner__showmore-text">VER MÁS</p>
        <Icon icon={faArrowDown} className="banner__showmore-icon" />
      </div>
    </div>
  );
};

const mapStateToProps = (store) => ({ theme: store.theme });

// export default index;
export default connect(mapStateToProps, null)(Index);
