import React from "react";
import Logo from "../games_images/logo.png";

import "../styles/Header.css";

function Header({ isBtnSelected, onLoginClick, onRegisterClick }) {
  return (
    <div className="section__header">
      <div className="box__logo">
        <img src={Logo} className="inner__logo" alt="Logo" />
      </div>
      <div className="box__btns">
        <button
          className={`inner__btn ${isBtnSelected ? "btn__active" : ""}`}
          onClick={onLoginClick}
        >
          Acessar conta
        </button>

        <button
          className={`inner__btn ${!isBtnSelected ? "btn__active" : ""}`}
          onClick={onRegisterClick}
        >
          Cadastre-se
        </button>
      </div>
    </div>
  );
}

export default Header;
