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
    default:
      return state;
  }
};

export default reducer;
