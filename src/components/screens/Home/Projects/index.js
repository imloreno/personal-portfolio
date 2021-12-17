import React from "react";
import { connect } from "react-redux";
import BorderIcon from "../Skills/BorderIcon";

const Index = ({ theme }) => {
  return (
    <section className={`projects ${theme === "light" && "light-theme"}`}>
      <BorderIcon id="skills__border-bottom" />
      <p>Hola como estas</p>
    </section>
  );
};

const mapDispatchToProps = (store) => ({ theme: store.theme });
export default connect(mapDispatchToProps, null)(Index);
