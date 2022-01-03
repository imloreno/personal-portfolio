import React from "react";
import Buttons from "../../assets/Buttons";

const WeatherInteraction = () => {
  return (
    <div className="weather__interaction">
      <div className="weather__search">
        <form action="#" className="form__search">
          <input
            type="search"
            className="search__box"
            placeholder="Buscar por ciudad"
          />
          <Buttons text="Buscar" />
        </form>
        <Buttons text="Agregar ciudad actual" />
        <ul className="search__city-list">
          <h3>Ciudades guardadas</h3>
          <li>Madrid</li>
          <li>Barcelona</li>
          <li>La Paz</li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherInteraction;
