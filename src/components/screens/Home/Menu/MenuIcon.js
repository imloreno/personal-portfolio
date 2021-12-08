import { useRef } from "react";

const MenuIcon = ({ state, switchMenu }) => {
  const icon = useRef();

  return (
    <svg
      id="menuIcon"
      className={`menu__icon ${state && "menu__icon--active"}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 5 45.0 25.0"
      ref={icon}
      onClick={switchMenu}
    >
      <path
        className="menu__icon-stroke"
        d="M35.72,39.39,56.93,60.61C62.32,66,65.32,67,67.32,65s3-7-6-7h-30"
        transform="translate(-30.32 -33.05)"
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          strokeWidth: "0.12rem",
          overflow: "visible",
          transition: "all 0.7s cubic-bezier(0.5, 0, 0.2, 1)",
        }}
      />
      <line
        className="menu__icon-middle"
        x1="5"
        y1="16.95"
        x2="27"
        y2="16.95"
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          strokeWidth: "0.12rem",
          transition: "all 0.7s cubic-bezier(0.5, 0, 0.2, 1)",
        }}
      />
      <path
        className="menu__icon-stroke"
        d="M35.72,60.61,56.93,39.39C62.32,34,65.32,33,67.32,35s3,7-6,7h-30"
        transform="translate(-30.32 -33.05)"
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          strokeWidth: "0.12rem",
          transition: "all 0.7s cubic-bezier(0.5, 0, 0.2, 1)",
        }}
      />
    </svg>
  );
};

export default MenuIcon;
