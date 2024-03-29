const reducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_MENU": {
      return {
        ...state,
        menu: {
          ...state.menu,
          state: !state.menu.state,
        },
      };
    }
    case "SWITCH_THEME": {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case "SET_PROJECT_LIST": {
      return {
        ...state,
        projectList: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
