import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ClockSvg from "./ClockSvg";
import DarkThemeIcon from "./DarkThemeIcon";
import { switchTheme } from "../../../../actions";

const MenuList = ({ isActive, theme, switchTheme }) => {
  const handleTheme = () => {
    switchTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`menu__container ${theme === "light" && "light-theme"}`}>
      <div className="menu__clock-container">
        <ClockSvg />
      </div>
      <ul className="menu__list">
        <Link to="/">
          <li className="menu__item">inicio</li>
        </Link>
        <Link to="/">
          <li className="menu__item">sobre mi</li>
        </Link>
        <Link to="/">
          <li className="menu__item">contacto</li>
        </Link>
      </ul>
      <div className="menu__settings">
        <div className="menu__settings-icon" onClick={handleTheme}>
          <DarkThemeIcon theme={theme} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => ({
  isActive: store.menu.state,
  theme: store.theme,
});

const mapDispatchToProps = { switchTheme };

// export default MenuList;
export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
