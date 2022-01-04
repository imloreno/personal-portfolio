const EXP_REG_TEXT = /[&/\\#,+(!)$~%.'":;*<>{}]/g;
const REG_EXP_EMAIL = /^[^@'"><;:, ]+@[^@'"><;:, ]+\.[a-zA-Z]{2,}$/;

//Verify if is valid
const isValid = (word) => {
  return !EXP_REG_TEXT.test(word) ? true : false;
};

//Validate if is email
const isEmail = (word) => {
  const RES = word.toLowerCase();
  return REG_EXP_EMAIL.test(RES);
};

//Replace characters
const replaceCharacteres = (word) => {
  return word.replace(EXP_REG_TEXT, ",");
};

export { isValid, isEmail, replaceCharacteres };
