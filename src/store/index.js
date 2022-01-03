import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers";

const ICON_LIST = [
  { type: "html", title: "HTML", since: 2019 },
  { type: "css", title: "CSS", since: 2019 },
  { type: "sass", title: "SASS", since: 2020 },
  { type: "js", title: "Javascript", since: 2019 },
  { type: "es6", title: "ES6+", since: 2020 },
  { type: "react", title: "React", since: 2020 },
  { type: "router", title: "Router", since: 2020 },
  { type: "redux", title: "Redux", since: 2021 },
  { type: "context", title: "Context", since: 2020 },
  { type: "php", title: "PHP", since: 2020 },
  { type: "mysql", title: "MYSQL", since: 2020 },
  { type: "git", title: "GIT", since: 2020 },
  { type: "github", title: "Github", since: 2020 },
  { type: "vscode", title: "V.S. code", since: 2019 },
  { type: "linux", title: "Linux", since: 2021 },
  { type: "psd", title: "Photoshop", since: 2016 },
  { type: "ai", title: "Illustrator", since: 2018 },
  { type: "figma", title: "Figma", since: 2020 },
];

const initialState = {
  theme: "dark",
  menu: {
    state: false,
  },
  iconList: ICON_LIST,
  session: {
    fullname: "",
    user: "",
    token: "",
    isLogged: false,
  },
};

const store = createStore(reducer, initialState);

const ReduxProvider = (props) => {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
