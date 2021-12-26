import React from "react";
import { connect } from "react-redux";

const Index = ({ theme }) => {
  return (
    <section className={`academy ${theme === "light" && "light-theme"}`}>
      <header className="academy__header">
        <h2 className="academy__title">Formación académica</h2>
        <p>Esta es una parte de mi formación como desarrollador.</p>
      </header>
      <div className="academy__content">
        <article className="academy__item">
          <header className="academy__item-header">
            <h3 className="academy__item-title">Secundaria</h3>
            <p className="academy__reference">General Agustín Saavedra</p>
            <p>2010 - 2015</p>
          </header>
        </article>
        <article className="academy__item">
          <header className="academy__item-header">
            <h3 className="academy__item-title">Universidad</h3>
            <p className="academy__reference">
              Universidad Autónoma Gabriel René Moreno
            </p>
            <p>2016 - ( pausa )</p>
            <p>A un año de terminar la carrera</p>
          </header>
        </article>
        <article className="academy__item">
          <header className="academy__item-header">
            <h3 className="academy__item-title">Certificaciones</h3>
            <p className="academy__reference">UDEMY</p>
            <p>2019 - infinite</p>
          </header>
        </article>
        <article className="academy__item">
          <header className="academy__item-header">
            <h3 className="academy__item-title">Logros personales</h3>
            <p className="academy__reference">
              Feria de ciencias de la universidad
            </p>
            <ul className="academy__item-li">
              <li>
                Participacion
                <span>2017</span>
              </li>
              <li>
                2do lugar en mi facultad
                <span>2018</span>
              </li>
              <li>
                1mer lugar a nivel departamental (Santa Cruz)
                <span>2019</span>
              </li>
            </ul>
          </header>
        </article>
      </div>
    </section>
  );
};

const mapStateToProps = (store) => ({ theme: store.theme });

// export default Index;
export default connect(mapStateToProps, null)(Index);
