import HtmlLogo from "./svg/HtmlLogo";
import CssLogo from "./svg/CssLogo";
import JsLogo from "./svg/JsLogo";
import Es6Logo from "./svg/Es6Logo";
import SassLogo from "./svg/SassLogo";
import ReactLogo from "./svg/ReactLogo";
import MySqlLogo from "./svg/MySqlLogo";
import ReactRouterLogo from "./svg/ReactRouterLogo";
import ReduxLogo from "./svg/ReduxLogo";
import PhpLogo from "./svg/PhpLogo";
import GitLogo from "./svg/GitLogo";
import VsStudioLogo from "./svg/VsStudioLogo";
import GitHubLogo from "./svg/GitHubLogo";
import LinuxLogo from "./svg/LinuxLogo";
import PsLogo from "./svg/PsLogo";
import AiLogo from "./svg/AiLogo";
import FigmaLogo from "./svg/FigmaLogo";

const Logos = (props) => {
  const { type = "default", className = "", isHover = false } = props;

  const showIconType = {
    html: <HtmlLogo className={className} />,
    css: <CssLogo className={className} />,
    sass: <SassLogo className={className} />,
    js: <JsLogo className={className} />,
    es6: <Es6Logo className={className} />,
    react: <ReactLogo className={className} />,
    mysql: <MySqlLogo className={className} />,
    router: <ReactRouterLogo className={className} />,
    redux: <ReduxLogo className={className} />,
    context: <ReactLogo className={className} />,
    php: <PhpLogo className={className} />,
    git: <GitLogo className={className} />,
    github: <GitHubLogo className={className} isHover={isHover} />,
    vscode: <VsStudioLogo className={className} />,
    linux: <LinuxLogo className={className} />,
    psd: <PsLogo className={className} />,
    ai: <AiLogo className={className} />,
    figma: <FigmaLogo className={className} />,
    default: <HtmlLogo className={className} />,
  };

  return showIconType[type] ? showIconType[type] : showIconType["default"];
};

export default Logos;
