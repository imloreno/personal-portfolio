import React from "react";
import { faGlobeAmericas, faImages } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

const ProjectCard = (props) => {
  const { img, business = "", description = "" } = props;

  return (
    <article className="projects__item">
      <img className="projects__item-img" src={img} alt={business} />
      <div className="proyects__item-content">
        <div className="projects__svg">
          <svg viewBox="0 0 200 30">
            <polygon points="200 30 0 0 0 30 200 30" />
          </svg>
        </div>
        <h3 className="proyects__item-title">{business}</h3>
        <p className="proyects__item-subtitle">{description}</p>
        <ul className="projects__icons">
          <a href="www.facebook.com">
            <li>
              <Icon icon={faGithub} />
            </li>
          </a>
          <a href="www.facebook.com">
            <li>
              <Icon icon={faGlobeAmericas} />
            </li>
          </a>
          <a href="www.facebook.com">
            <li>
              <Icon icon={faImages} />
            </li>
          </a>
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
