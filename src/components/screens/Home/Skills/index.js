import BorderIcon from "./BorderIcon";
import Logos from "./Logos";

const LOGO_LIST = [
  { type: "html", title: "HTML" },
  { type: "css", title: "CSS" },
  { type: "sass", title: "SASS" },
  { type: "js", title: "JAVASCRIPT" },
  { type: "es6", title: "ES6+" },
  { type: "react", title: "REACT" },
  { type: "mysql", title: "MYSQL" },
];

const index = () => {
  return (
    <section className="skills">
      <div className="skills__container">
        <header className="skills__title-container">
          <h2 className="skills__title">Habilidades</h2>
        </header>
        <div className="skills__items--container">
          {LOGO_LIST.map((e, index) => (
            <article
              key={e.title + index}
              className="skills__item"
              onMouseOver={(e) => e.target.classList.add("animation--on")}
              onMouseOut={(e) => e.target.classList.remove("animation--on")}
            >
              <div className="skills__item-content">
                <div
                  className={`skills__logocontainer ${
                    "skills__logo--" + e.type
                  }`}
                >
                  <Logos type={e.type} className="animated" />
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
      <div className="skills__border">
        <BorderIcon id="skills__border-bottom" />
      </div>
    </section>
  );
};

export default index;
