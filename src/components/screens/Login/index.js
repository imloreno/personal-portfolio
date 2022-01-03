import { useEffect } from "react";
import { useState } from "react";
import Buttons from "../../assets/Buttons";
import { MAIN_URL } from "../../scripts/routes";
import { insertUser, loginUser } from "../../scripts/user";

const TEXT_SWITCH = (x) => {
  return x
    ? {
        title: "Iniciar Sesión",
        text: "Si aún no tienes cuenta, puedes ingresar ",
      }
    : {
        title: "Crear una cuenta",
        text: "Si ya tienes una cuenta, puedes ingresar ",
      };
};

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputProfile, setInputProfile] = useState();
  const [previewImg, setPreviewImg] = useState(
    MAIN_URL + "view/assets/profile-default.png"
  );

  //To get temp profile url
  const handleImage = (e) => {
    if (!e.target.files[0]) {
      return;
    }
    setInputProfile(e);
  };
  useEffect(() => {
    if (!inputProfile) {
      setPreviewImg(MAIN_URL + "view/assets/profile-default.png");
      return;
    }
    const FILE = inputProfile.target.files[0];
    const OBJ_URL = URL.createObjectURL(FILE);
    setPreviewImg(OBJ_URL);
    return () => URL.revokeObjectURL(OBJ_URL);
  }, [inputProfile]);

  //Handle functions
  const handleSetLogin = () => setIsLogin(!isLogin);
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    loginUser({ body: e.target });
  };
  const handleSubmitSingIn = (e) => {
    e.preventDefault();
    insertUser({ body: e.target });
  };

  return (
    <div className="login">
      <div className="login-content">
        <div className={`login__title ${isLogin && "login__title--login"}`}>
          <div className="login__title-box">
            <h2 className="login__title-text">{TEXT_SWITCH(isLogin).title}</h2>
            <p className="login__title-paragraph">
              {TEXT_SWITCH(isLogin).text + " "}
              <span onClick={handleSetLogin} className="login__title-link">
                aquí.
              </span>
            </p>
          </div>
        </div>

        <form
          className="login__form"
          action="#"
          encType="multipart/formdata"
          onSubmit={handleSubmitSingIn}
        >
          <label htmlFor="singin__image" className="singin__image">
            <img src={previewImg} className="singin__profile" alt="Profile" />
            <p className="singin__profile-status">
              Selecciona una imagen de tu directorio
            </p>
          </label>

          <input
            id="singin__image"
            className="login__input"
            type="file"
            name="image"
            accept="image/jpeg, image/png"
            hidden
            onChange={handleImage}
          />
          <input
            className="login__input"
            type="text"
            name="fullname"
            placeholder="Nombre completo"
          />
          <input
            className="login__input"
            type="text"
            name="username"
            placeholder="Usuario"
          />
          <input
            className="login__input"
            type="password"
            name="pass"
            placeholder="Contraseña"
          />
          <input
            className="login__input"
            type="password"
            name="pass_verify"
            placeholder="Repetir contraseña"
          />
          <Buttons text="Crear usuario" className="login__button" />
        </form>
        <form className="login__form" action="#" onSubmit={handleSubmitLogin}>
          <input
            className="login__input"
            type="text"
            placeholder="Nombre de usuario"
          />
          <input
            className="login__input"
            type="password"
            placeholder="Contraseña"
          />
          <Buttons text="Ingresar" className="login__button" />
        </form>
      </div>
    </div>
  );
};

export default Index;
