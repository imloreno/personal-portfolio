import { useRef } from "react";

import Menu from "../Home/Menu";
import MenuList from "../Home/Menu/MenuList";
import Footer from "../Home/Footer";

const Index = () => {
  const body = useRef();

  return (
    <>
      <Menu body={body} />
      <div className="body" ref={body}>
        <MenuList />
        <div className="all-container scroll">
          <p>Este es el cuerpo del documento</p>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
