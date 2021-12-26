import React from "react";

const Buttons = (props) => {
  const {
    text = "Entrar",
    className = "",
    onClick = () => {},
    styles = "",
  } = props;

  return (
    <button className={`btn ${className}`} onClick={onClick}>
      <p className="btn__text">{text}</p>
    </button>
  );
};

export default Buttons;
