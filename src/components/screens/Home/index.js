import { useRef } from "react";

import Menu from "./Menu";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import MenuList from "./Menu/MenuList";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import Academy from "./Academy";
import Contact from "./Contact";

const Index = () => {
  const body = useRef();

  return (
    <>
      <Menu body={body} />
      <div className="body" ref={body}>
        <MenuList />
        <div className="all-container scroll">
          <Banner />
          <AboutMe />
          <Skills />
          <Projects />
          <Academy />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
