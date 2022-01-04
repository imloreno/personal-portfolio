import React from "react";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

const ProjectCard = (props) => {
  const { img, title = "", description = "", reference = [] } = props;

  return (
    <article className="projects__item">
      <img className="projects__item-img" src={img} alt={title} />
      <div className="proyects__item-content">
        <div className="projects__svg">
          <svg viewBox="0 0 200 30">
            <polygon points="200 30 0 0 0 30 200 30" />
          </svg>
        </div>
        <h3 className="proyects__item-title">{title}</h3>
        <p className="proyects__item-subtitle">{description}</p>
        <ul className="projects__icons">
          {reference.map((item, index) => (
            <a href={item.url} rel="noreferrer" target="_blank" key={index}>
              <li>
                {item.type === "github" && <Icon icon={faGithub} />}
                {item.type === "web" && <Icon icon={faGlobeAmericas} />}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
