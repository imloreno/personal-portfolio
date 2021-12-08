import { useEffect } from "react";
import { connect } from "react-redux";
import { switchMenuState } from "../../../../actions";
import { Link } from "react-router-dom";
import LogoMenu from "./LogoMenu";
import MenuIcon from "./MenuIcon";

const Index = (props) => {
  const { menu, body, switchState } = props;

  //Add class "body__menu--active" to root screen component
  useEffect(() => {
    menu.state
      ? body.current.classList.add("body__menu--active")
      : body.current.classList.remove("body__menu--active");
  }, [menu, body]);

  return (
    <header className={`menu ${menu.state && "menu--active"}`}>
      <Link to="/">
        <LogoMenu />
      </Link>
      <MenuIcon state={menu.state} switchMenu={switchState} />
    </header>
  );
};

const mapStateToProps = (store) => ({ menu: store.menu });
const mapDispatchtoProps = { switchState: switchMenuState };

// export default index;
export default connect(mapStateToProps, mapDispatchtoProps)(Index);
