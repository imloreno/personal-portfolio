import React, { useState } from "react";
import { connect } from "react-redux";
import BorderBottomIcon from "../Projects/BorderBottomIcon";
import Buttons from "../../../assets/Buttons";
import ContactSvg from "./ContactSvg";
import {
  faFacebook,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  isEmail,
  replaceCharacteres,
} from "../../../scripts/validateCharacteres";
import sendEmail from "../../../scripts/sendEmail";

const Index = ({ theme }) => {
  const [msgAlert, setMsgAlert] = useState({ msg: "", active: false });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmail(email)) {
      setMsgAlert({
        msg: "",
        active: false,
      });

      sendEmail({
        name: replaceCharacteres(name),
        email: email,
        message: replaceCharacteres(message),
      });

      setName("");
      setEmail("");
      setMessage("");
      e.target.reset();
    } else {
      setMsgAlert({
        msg: "Rellenar los campos de forma correcta",
        active: true,
      });
    }
  };

  return (
    <>
      <section className={`contact ${theme === "light" && "light-theme"}`}>
        <BorderBottomIcon />
        <div className="contact__content">
          <div className="contact__info">
            <header className="contact__info-header">
              <h2 className="contact__title">Contáctame</h2>
              <p>
                Si deseas comunicarte conmigo, no dudes en hacerlo, tanto para
                darme consejos, como para pedírmelos. Yo te responderé con mucho
                gusto!!!
              </p>
            </header>
            <div className="contact__img">
              <ContactSvg />
            </div>
          </div>
          <form action="/" className="contact__form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="contact__input"
              name="name"
              placeholder="Nombre"
              defaultValue={name}
              onChange={handleName}
            />
            <input
              type="email"
              className="contact__input"
              name="email"
              placeholder="Email"
              defaultValue={email}
              onChange={handleEmail}
            />
            <textarea
              name="text"
              className="contact__textarea"
              placeholder="Mensaje"
              onChange={handleMessage}
              defaultValue={message}
            ></textarea>
            {msgAlert.active && (
              <p className="contact__alert">{msgAlert.msg}</p>
            )}
            <Buttons text="Enviar mensaje" className="contact__button" />

            <ul className="contact__social-icons">
              <a
                href="https://www.facebook.com/Sanc7us/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="contact__social-icon">
                  <Icon icon={faFacebook} />
                </li>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=59169141407&text=Hola"
                target="_blank"
                rel="noreferrer"
              >
                <li className="contact__social-icon">
                  <Icon icon={faWhatsapp} />
                </li>
              </a>
              <a
                href="https://github.com/SoySanty"
                target="_blank"
                rel="noreferrer"
              >
                <li className="contact__social-icon">
                  <Icon icon={faGithub} />
                </li>
              </a>
            </ul>
          </form>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (store) => ({ theme: store.theme });

export default connect(mapStateToProps, null)(Index);
