import { useRef } from "react";
import { connect } from "react-redux";

import Menu from "../Home/Menu";
import MenuList from "../Home/Menu/MenuList";
import Footer from "../Home/Footer";
import WeatherInterface from "./WeatherInterface";
import WeatherInteraction from "./WeatherInteraction";
import Login from "../Login";

const Index = ({ theme, isLogged }) => {
  const body = useRef();

  return isLogged ? (
    <>
      <Menu body={body} />
      <div className="body" ref={body}>
        <MenuList />
        <div className="all-container scroll">
          <div className={`interactions ${theme === "light" && "light-theme"}`}>
            <div className="interactions__container">
              <WeatherInterface />
              <WeatherInteraction />
              <div className="comments">
                <h3>Comentarios</h3>
                <p>Este es el primer comentario</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  ) : (
    <Login />
  );
};

const mapStateToProps = (store) => ({
  theme: store.theme,
  isLogged: store.session.isLogged,
});

export default connect(mapStateToProps, null)(Index);
