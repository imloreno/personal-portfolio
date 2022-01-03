import { useRef } from "react";
import { useParams } from "react-router-dom";

import Menu from "../../modules/Menu";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import MenuList from "../../modules/Menu/MenuList";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import Academy from "./Academy";
import Contact from "./Contact";
import { useEffect } from "react";

const Index = () => {
  const PARAM = useParams();
  const body = useRef();

  //scroll refs
  const scroll_box = useRef();
  const about_box = useRef();
  const skills_box = useRef();
  const projects_box = useRef();
  const training_box = useRef();
  const contact_box = useRef();

  //Show more scroll function
  const toAboutMe = () => {
    scroll_box.current.scroll(0, about_box.current.offsetTop);
  };

  useEffect(() => {
    const SCROLL = {
      about: () => toAboutMe(),
      skills: () => scroll_box.current.scroll(0, skills_box.current.offsetTop),
      projects: () =>
        scroll_box.current.scroll(0, projects_box.current.offsetTop + 150),
      training: () =>
        scroll_box.current.scroll(0, training_box.current.offsetTop),
      contact: () =>
        scroll_box.current.scroll(0, contact_box.current.offsetTop + 100),
      default: () => scroll_box.current.scroll(0, 0),
    };
    SCROLL[PARAM.target] ? SCROLL[PARAM.target]() : SCROLL["default"]();
  }, [PARAM]);

  return (
    <>
      <Menu body={body} />
      <div className="body" ref={body}>
        <MenuList />
        <div className="all-container scroll" ref={scroll_box}>
          <Banner scroll={toAboutMe} />
          <div ref={about_box}></div>
          <AboutMe />
          <div ref={skills_box}></div>
          <Skills />
          <div ref={projects_box}></div>
          <Projects />
          <div ref={training_box}></div>
          <Academy />
          <div ref={contact_box}></div>
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
