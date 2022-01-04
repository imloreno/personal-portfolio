import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import ClockSvg from "./ClockSvg";
import DarkThemeIcon from "./DarkThemeIcon";
import { switchTheme, switchMenuState } from "../../../actions";

const MenuList = ({ isActive, theme, switchTheme, switchMenuState }) => {
  const handleTheme = () => {
    switchTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`menu__container ${theme === "light" && "light-theme"}`}>
      <div className="menu__clock-container">
        <ClockSvg isActive={isActive} />
      </div>
      <ul className="menu__list" onClick={switchMenuState}>
        <NavLink
          to="/"
          className={(e) => (e.isActive ? "menu__link--active" : "")}
        >
          <li className="menu__item">inicio</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(e) => (e.isActive ? "menu__link--active" : "")}
        >
          <li className="menu__item">sobre mi</li>
        </NavLink>
        <NavLink
          to="/skills"
          className={(e) => (e.isActive ? "menu__link--active" : "")}
        >
          <li className="menu__item">habilidades</li>
        </NavLink>
        <NavLink
          to="/projects"
          className={(e) => (e.isActive ? "menu__link--active" : "")}
        >
          <li className="menu__item">proyectos</li>
        </NavLink>
        <NavLink
          to="/training"
          className={(e) => (e.isActive ? "menu__link--active" : "")}
        >
          <li className="menu__item">Formación</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(e) => (e.isActive ? "menu__link--active" : "")}
        >
          <li className="menu__item">contacto</li>
        </NavLink>

        {/* <hr />

        <NavLink
          to="/interactions"
          className={(e) => (e.isActive ? "menu__link--active" : "")}
        >
          <li className="menu__item">interacciones ( API )</li>
        </NavLink> */}
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

const mapDispatchToProps = { switchTheme, switchMenuState };

// export default MenuList;
export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
