import React from "react";

const LogoMenu = () => {
  return (
    <svg
      className="menu__logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -6 162 89"
      style={{ overflow: "visible" }}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g id="reloj">
            <line
              x1="2.5"
              y1="44.5"
              x2="117.5"
              y2="44.5"
              style={{
                fill: "none",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
            <circle
              cx="117.5"
              cy="44.5"
              r="42"
              style={{
                fill: "none",
                strokeLinecap: "square",
                strokeMiterlimit: 10,
                strokeWidth: 3,
              }}
            />
          </g>
        </g>
        <g id="rotater">
          <line
            x1="117.5"
            y1="44.5"
            x2="117.5"
            y2="12.5"
            style={{
              fill: "none",
              strokeLinecap: "square",
              strokeMiterlimit: 10,
              strokeWidth: 3,
            }}
          />
        </g>
      </g>
    </svg>
  );
};

export default LogoMenu;
