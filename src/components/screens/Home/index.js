import { useRef } from "react";

import Menu from "./Menu";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import MenuList from "./Menu/MenuList";
import Skills from "./Skills";

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
        </div>
      </div>
    </>
  );
};

export default Index;
