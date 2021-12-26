import React from "react";
import { connect } from "react-redux";
import BorderIcon from "../Skills/BorderIcon";

//Personal features
import Img1 from "../../../../images/interests/profile-1.png";
import Img3 from "../../../../images/interests/profile-3.png";
import Img4 from "../../../../images/interests/profile-5.png";
import Img5 from "../../../../images/interests/profile-6.png";
import Img7 from "../../../../images/interests/profile-8.png";
import Buttons from "../../../assets/Buttons";

const Index = ({ theme }) => {
  return (
    <section className={`about ${theme === "light" && "light-theme"}`}>
      <div className="about__text">
        <h2 className="about__title">Sobre mi</h2>
        <p className="about__paragraph">
          Hola!, soy Santiago Arias Villegas, un programador oriundo de Bolivia,
          apasionado por la tecnología web, con el objetivo de convertirme en
          desarrollador full-stack o más de ser posible.
          <br />
          En esta web, te contaré mi pasado, presente y el futuro al que aspiro,
          de la forma más dinámica posible.
          <br />
          Espero te guste!!
        </p>
        <Buttons text="Descargar CV" className="" onClick={() => alert()} />
      </div>
      <div className="interests__container">
        <ul className="interests__list-container">
          <li className="interests__item">
            <p>Naturaleza</p>
            <img src={Img5} alt="Santiago Arias Villegas" />
          </li>
          <li className="interests__item">
            <p>Responsabilidad</p>
            <img src={Img7} alt="Santiago Arias Villegas" />
          </li>
          <li className="interests__item">
            <p>Buen humor</p>
            <img src={Img4} alt="Santiago Arias Villegas" />
          </li>
          <li className="interests__item">
            <p>Trabajo en equipo</p>
            <img src={Img3} alt="Santiago Arias Villegas" />
          </li>
          <li className="interests__item">
            <p>Música</p>
            <img src={Img1} alt="Santiago Arias Villegas" />
          </li>
        </ul>
      </div>
      {/* <div className="about__animation">
        <CircleSvg />
      </div> */}

      <BorderIcon id="skills__border-top" />
    </section>
  );
};

const mapStateToProps = (store) => ({
  theme: store.theme,
});

// export default index;
export default connect(mapStateToProps, null)(Index);
