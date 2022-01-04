import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setProjectList } from "../../../../actions";
import { MAIN_URL } from "../../../scripts/routes";
import BorderIcon from "../Skills/BorderIcon";
import BorderBottomIcon from "./BorderBottomIcon";
import ProjectCard from "./ProjectCard";

const getProjects = async ({ callback }) => {
  const URL = MAIN_URL + "projects/get";
  const request = await fetch(URL);
  const response = await request.json();
  callback(response);
};

const Index = ({ theme, projectList, setProjectList }) => {
  useEffect(() => {
    if (projectList.length <= 0) {
      getProjects({ callback: (e) => setProjectList(e) });
    }
  }, [projectList, setProjectList]);

  return (
    projectList.length > 0 && (
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
          {projectList.map((item, index) => (
            <ProjectCard
              key={index}
              img={MAIN_URL + item.img}
              title={item.title}
              description={item.description}
              reference={item.reference}
            />
          ))}
        </div>
        <div className="projects__separator">
          <BorderBottomIcon />
        </div>
      </section>
    )
  );
};

const mapStateToProps = (store) => ({
  theme: store.theme,
  projectList: store.projectList,
});

const mapDispatchToProps = {
  setProjectList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
