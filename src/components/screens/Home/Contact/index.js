import React from "react";
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

const Index = ({ theme }) => {
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
          <form action="/" className="contact__form" onSubmit={(e) => alert(e)}>
            <input
              type="text"
              className="contact__input"
              name="name"
              placeholder="Nombre"
            />
            <input
              type="email"
              className="contact__input"
              name="email"
              placeholder="Email"
            />
            <textarea
              name="text"
              className="contact__textarea"
              placeholder="Mensaje"
            ></textarea>
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
