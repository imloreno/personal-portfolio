import HtmlLogo from "./svg/HtmlLogo";
import CssLogo from "./svg/CssLogo";
import JsLogo from "./svg/JsLogo";
import Es6Logo from "./svg/Es6Logo";
import SassLogo from "./svg/SassLogo";
import ReactLogo from "./svg/ReactLogo";
import MySqlLogo from "./svg/MySqlLogo";

const Logos = (props) => {
  const { type = "default", className = "" } = props;

  const showIconType = {
    html: <HtmlLogo className={className} />,
    css: <CssLogo className={className} />,
    sass: <SassLogo className={className} />,
    js: <JsLogo className={className} />,
    es6: <Es6Logo className={className} />,
    react: <ReactLogo className={className} />,
    mysql: <MySqlLogo className={className} />,

    default: <HtmlLogo className={className} />,
  };

  return showIconType[type] ? showIconType[type] : showIconType["default"];
};

export default Logos;
