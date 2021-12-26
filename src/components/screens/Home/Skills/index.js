import { useState } from "react";
import { connect } from "react-redux";
import Logos from "./Logos";

//Calculate experience in years
const getExperience = (year) => {
  const YEAR = new Date().getFullYear();
  return parseInt(Number(YEAR) - Number(year));
};

const Index = ({ iconList, theme }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <section className={`skills ${theme === "light" && "light-theme"}`}>
      <header className="skills__title-container">
        <h2 className="skills__title">Habilidades</h2>
        <p className="skills__subtitle">
          A la fecha, estas son mis habilidades .
        </p>
      </header>
      <div className="skills__container">
        <div className="skills_list-container">
          <ul className="skills__list">
            {iconList.map((e, index) => (
              <li
                key={e.type + index}
                className="skills__list-item"
                style={{
                  borderLeft: `.2rem solid var(--color-${e.type}-active)`,
                }}
              >
                <p>{e.title}</p>
                <p style={{ opacity: 0.5, fontSize: ".9em" }}>
                  {getExperience(e.since) <= 0
                    ? "Menos de un año"
                    : `Desde ${e.since}`}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="skills__items--container">
          {iconList.map((e, index) => (
            <article
              key={e.title + index}
              className="skills__item"
              onMouseOver={(e) => {
                e.target.classList.add("animation--on");
                setIsHover(true);
              }}
              onMouseOut={(e) => {
                e.target.classList.remove("animation--on");
                setIsHover(false);
              }}
            >
              <div className="skills__item-content">
                <div
                  className={`skills__logocontainer ${
                    "skills__logo--" + e.type
                  }`}
                >
                  <Logos type={e.type} className="animated" isHover={isHover} />
                  <Logos type={e.type} className="bg-icon" />
                </div>
                <h3 className={`skills__titlelogo color-${e.type}`}>
                  {e.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (store) => ({
  iconList: store.iconList,
  theme: store.theme,
});

// export default Index;
export default connect(mapStateToProps, null)(Index);
