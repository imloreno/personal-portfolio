import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers";

const initialState = {
  menu: {
    state: false,
  },
};

const store = createStore(reducer, initialState);

const ReduxProvider = (props) => {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
