import React from "react";

const WeatherSvg = ({ theme }) => {
  const ASSETS = theme;
  const COLORS = theme;

  return (
    <svg
      id="weather-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 50 802 950" //50 -> 0
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="401.91"
          y1="544.02"
          x2="401.91"
          y2="1.02"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stopColor={COLORS.bga} />
          <stop offset="1" stopColor={COLORS.bgb} />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="290.83"
          y1="572.68"
          x2="219.32"
          y2="167.13"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#bababa" />
          <stop offset="0.03" stopColor="#bebebe" />
          <stop offset="0.27" stopColor="#dadada" />
          <stop offset="0.52" stopColor="#efefef" />
          <stop offset="0.76" stopColor="#fbfbfb" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1="578.5"
          y1="310.81"
          x2="460.58"
          y2="-26.89"
          gradientTransform="matrix(-0.94, 0.33, -0.31, -0.88, 1169.25, 342.81)"
          href="#linear-gradient-2"
        />
        <linearGradient
          id="linear-gradient-4"
          x1="558.68"
          y1="338.12"
          x2="556.66"
          y2="734.03"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={COLORS.moun2a} />
          <stop offset="0.98" stopColor={COLORS.moun2b} />
        </linearGradient>
        <linearGradient
          id="linear-gradient-5"
          x1="400"
          y1="230.16"
          x2="400"
          y2="816"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={COLORS.moun1a} />
          <stop offset="1" stopColor={COLORS.moun1b} />
        </linearGradient>
        <linearGradient
          id="linear-gradient-6"
          x1="-5.88"
          y1="957.74"
          x2="815.98"
          y2="842.23"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={COLORS.fronta} />
          <stop offset="0.51" stopColor={COLORS.frontb} />
          <stop offset="1" stopColor={COLORS.fronta} />
        </linearGradient>
      </defs>
      <rect className="cls-1" x="1.91" y="1.02" width="800" height="543" />
      {ASSETS.sun && (
        <g id="sun">
          <circle className="cls-2" cx="423.41" cy="290.52" r="116.5" />
        </g>
      )}
      {ASSETS.cloud && (
        <g id="clouds" className="cls-3">
          <path
            className="cls-4"
            d="M1,272c0-18.06-1-46-1-46,30.12-43.28,118.48-38,129-3.74,3.47,11.32,15.4,22.25,27,24.37,22.35,4.07,38.47,15.86,49.1,30.51a42.9,42.9,0,0,0,59.75,10.08c29.74-21.28,51.91-24.37,92.29-2.08a56,56,0,0,0,48,3.17C448,271,508.61,303.74,487.65,382c-11.94,44.57,10.18,140.3-44.65,140-36.74-.18-114.57,10.21-129,44-6.45,15.09-32.24-27-63.62-26.52C187.78,540.49,1,470.91,1,272Z"
            transform="translate(1.91 1.02)"
          />
          <path
            className="cls-5"
            d="M799.94,477,782,476c-22.34,3.89-56.38-30.44-71-39.81-19.12-12.26-45.6-7.51-59.46,11.1-21.37,28.7-41.3,38.84-86.32,32.69A59.47,59.47,0,0,0,519,493.22c-34.95,29.62-102.34,21-107.06-55-2.68-43.29,25.36-86.27,77.12-104.36C523.77,321.75,545,305.62,548,271c1.35-15.46,8.91-40,38.33-51,39-14.49,132.69-23.65,213.67,26C800,246,800,481.88,799.94,477Z"
            transform="translate(1.91 1.02)"
          />
        </g>
      )}
      <path
        id="back"
        className="cls-6"
        d="M339.42,514.66c96.59-18.54,170.46-31.4,206.51-37.52A30.76,30.76,0,0,0,571,452.5c5.88-31.41,34-38.66,58.25-33.19,15.47,3.48,36.18-4.89,35.84-20.74C663.61,328.9,741.46,253.86,755,408c2.81,32,10,64,45,68,0,0,.06,227.7,0,228L354.13,725.06a30.8,30.8,0,0,1-32.29-29.24l-7.37-149.41A30.78,30.78,0,0,1,339.42,514.66Z"
        transform="translate(1.91 1.02)"
      />
      <path
        id="middle"
        className="cls-7"
        d="M0,506.42V816l800-3V677.66S562.9,583,356.62,541.76C349,540.24,342.08,535.89,339,528c-14.28-36.64-37.14-49.75-56.23-33.33-6.31,5.42-15.57,2-18.1-6.36-12.55-41.59-38.05-114.23-96.79-39.21-3.85,4.91-11,3.41-12.95-2.74C124.44,348.69,64.56,166,0,253Z"
        transform="translate(1.91 1.02)"
      />
      <path
        id="front"
        className="cls-8"
        d="M0,815.52c228.21-60.69,556.41-87,800-87V999.6H0Z"
        transform="translate(1.91 1.02)"
      />
      {ASSETS.moon && (
        <g id="moon">
          <path
            className="cls-9"
            d="M371.49,236.17a57,57,0,0,1,55.14-98.7,67.66,67.66,0,1,0,14.44,97.42A57,57,0,0,1,371.49,236.17Z"
            transform="translate(1.91 1.02)"
          />
          <circle className="cls-10" cx="566.91" cy="213.02" r="6" />
          <circle className="cls-10" cx="599.91" cy="124.02" r="9" />
          <circle className="cls-10" cx="135.41" cy="169.52" r="4.5" />
          <circle className="cls-10" cx="259.41" cy="111.52" r="9.5" />
          <circle className="cls-10" cx="674.91" cy="195.02" r="4" />
        </g>
      )}
      {ASSETS.rain && (
        <g id="rain">
          <line
            className="cls-11"
            x1="357.41"
            y1="290.52"
            x2="446.41"
            y2="533.52"
          />
          <line
            className="cls-11"
            x1="546.41"
            y1="245.52"
            x2="635.41"
            y2="488.52"
          />
          <line
            className="cls-11"
            x1="528.41"
            y1="695.52"
            x2="617.41"
            y2="938.52"
          />
          <line
            className="cls-11"
            x1="76.41"
            y1="388.52"
            x2="165.41"
            y2="631.52"
          />
          <line className="cls-11" x1="1.41" y1="0.52" x2="90.41" y2="243.52" />
          <line
            className="cls-11"
            x1="398.41"
            y1="112.52"
            x2="487.41"
            y2="355.52"
          />
          <line
            className="cls-11"
            x1="712.41"
            y1="388.52"
            x2="801.41"
            y2="631.52"
          />
          <line
            className="cls-11"
            x1="582.41"
            y1="0.52"
            x2="671.41"
            y2="243.52"
          />
          <line
            className="cls-11"
            x1="609.41"
            y1="574.52"
            x2="698.41"
            y2="817.52"
          />
          <line
            className="cls-11"
            x1="76.41"
            y1="726.52"
            x2="165.41"
            y2="969.52"
          />
          <line
            className="cls-11"
            x1="158.41"
            y1="238.52"
            x2="247.41"
            y2="481.52"
          />
          <line
            className="cls-11"
            x1="158.41"
            y1="0.52"
            x2="247.41"
            y2="243.52"
          />
          <line
            className="cls-11"
            x1="357.41"
            y1="604.52"
            x2="446.41"
            y2="847.52"
          />
          <line
            className="cls-11"
            x1="277.41"
            y1="726.52"
            x2="366.41"
            y2="969.52"
          />
        </g>
      )}
    </svg>
  );
};

export default WeatherSvg;
