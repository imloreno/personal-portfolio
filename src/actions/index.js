//Menu
const switchMenuState = () => ({
  type: "SWITCH_MENU",
});

//Switch theme
const switchTheme = (payload) => ({
  type: "SWITCH_THEME",
  payload,
});

//Set projects list
const setProjectList = (payload) => ({
  type: "SET_PROJECT_LIST",
  payload,
});

export { switchMenuState, switchTheme, setProjectList };
