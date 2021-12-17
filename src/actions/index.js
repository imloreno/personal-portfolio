//Menu
const switchMenuState = () => ({
  type: "SWITCH_MENU",
});

//Switch theme
const switchTheme = (payload) => ({
  type: "SWITCH_THEME",
  payload,
});

export { switchMenuState, switchTheme };
