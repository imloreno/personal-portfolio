import React from "react";
import CircleSvg from "../Banner/CircleSvg";

const index = () => {
  return (
    <section className="about">
      <div className="about__text">
        <h2 className="about__title">Sobre mi</h2>
        <p className="about__paragraph">
          Hola!, soy Santiago Arias Villegas, un programador oriundo de Bolivia,
          apasionado con la tecnología web, con el sueño de convertirme en
          desarrollador full-stack o más de ser posible.
          <br />
          En esta web, te contaré mi pasado, presente y el futuro al que aspiro,
          de la forma más dinámica posible.
          <br />
          Espero te guste!!
        </p>
        <button className="about__button">Descargar CV</button>
      </div>
      <div className="about__animation">
        <CircleSvg />
      </div>
    </section>
  );
};

export default index;
