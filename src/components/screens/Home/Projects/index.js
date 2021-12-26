import React from "react";
import { connect } from "react-redux";
import BorderIcon from "../Skills/BorderIcon";
import ProjectCard from "./ProjectCard";

import Image1 from "../../../../images/projects/tucandera_1.jpg";
import Image2 from "../../../../images/projects/tucandera_2.jpg";
import Image3 from "../../../../images/projects/tucandera_3.jpg";
import Image4 from "../../../../images/projects/tucandera_4.jpg";
import Image5 from "../../../../images/projects/cosmon.jpg";
import BorderBottomIcon from "./BorderBottomIcon";

const Index = ({ theme }) => (
  <section className={`projects ${theme === "light" && "light-theme"}`}>
    <BorderIcon id="skills__border-bottom" />
    <header className="projects__header">
      <h2 className="projects__title">Algunos de mis proyectos</h2>
      <p className="projects__paragraph">
        Estos son algunos de mis proyectos, no son todos, no sabía de la
        importancia de guardar los trabajos. Pero creo que reflejan en gran
        parte mis habilidades.
      </p>
    </header>
    <div className="projects__list">
      <ProjectCard
        img={Image1}
        business="Tucandera Tours v1"
        description="Modificación del contenido de una plantilla genérica."
      />
      <ProjectCard
        img={Image2}
        business="Tucandera Tours v2"
        description="Diseño y desarrollo de una página web con HTML, CSS, Javascript nativo, PHP nativo (MVC) y mysql."
      />
      <ProjectCard
        img={Image3}
        business="Tucandera Tours v3"
        description="Refactorizacion del código de Javscript nativo a React js, además de ajustes en el diseño."
      />
      <ProjectCard
        img={Image5}
        business="COSMON"
        description="Desarrollo de un sistema de elecciones internas para una cooperativa. Applicando HTML, CSS, React js, PHP (MVC)  y MYSQL."
      />
      <ProjectCard
        img={Image4}
        business="Gourmand"
        description="Desarrollo de un sistema de gestion para un restaurante, aplicando HTML, Javascript, PHP (MVC) , Mysql."
      />
    </div>
    <div className="projects__separator">
      <BorderBottomIcon />
    </div>
  </section>
);

const mapDispatchToProps = (store) => ({ theme: store.theme });
export default connect(mapDispatchToProps, null)(Index);
