import { useEffect } from "react";
import { connect } from "react-redux";
import { switchMenuState } from "../../../actions";
import { Link } from "react-router-dom";
import LogoMenu from "./LogoMenu";
import MenuIcon from "./MenuIcon";

const Index = (props) => {
  const { menu, body, switchState, theme } = props;

  //Add class "body__menu--active" to root screen component
  useEffect(() => {
    const BODY = body.current;

    menu.state
      ? BODY.classList.add("body__menu--active")
      : BODY.classList.remove("body__menu--active");
  }, [menu, body, switchState]);

  return (
    <header
      className={`menu ${menu.state && "menu--active"} ${
        theme === "light" && "light-theme"
      }`}
    >
      <Link to="/">
        <LogoMenu />
      </Link>
      <MenuIcon state={menu.state} switchMenu={switchState} />
    </header>
  );
};

const mapStateToProps = (store) => ({ menu: store.menu, theme: store.theme });
const mapDispatchtoProps = { switchState: switchMenuState };

// export default index;
export default connect(mapStateToProps, mapDispatchtoProps)(Index);
