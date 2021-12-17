import React from "react";

const DarkThemeIcon = ({ theme }) => {
  return (
    <svg className={`icon-theme`} id="circle" viewBox="0 0 132 132">
      <path
        id="round"
        d={
          theme === "light"
            ? "M132,66c0,36.5-29.5,66-66,66S0,102.5,0,66S29.5,0,66,0S132,29.5,132,66z"
            : "M53,66c0,36.5,49.5,66,13,66S0,102.5,0,66S29.5,0,66,0S53,29.5,53,66z"
        }
        style={{ transition: "0.2s ease-in", transitionDelay: ".2s" }}
      />
    </svg>
  );
};

export default DarkThemeIcon;
