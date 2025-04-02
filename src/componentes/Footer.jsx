import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Logo from "../assets/logo.png";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__logo">
            <div className="box__logo">
                <img src={Logo} className="inner__logo" alt="Logo" />
            </div>
          </div>

          <div className="footer__social">
              <FaInstagram className="icon__social__midia"/>
              <FaFacebookF className="icon__social__midia"/>
            </div>
        </div>

        <div className="footer__mid">
            <div className="footer__menus">
                <div>
                <h4>Principal</h4>
                <p>Item do menu</p>
                <p>Item do menu</p>
                </div>
                <div>
                <h4>Mais</h4>
                <p>Item do menu</p>
                <p>Item do menu</p>
                </div>
                <div>
                <h4>Suporte</h4>
                <p>Item do menu</p>
                <p>Item do menu</p>
                </div>
            </div>

            <div className="footer__rating">
                <div className="footer__rating__card">
                    <div className="rating__number">12</div>
                    <div className="rating__info">
                    <p>Violência / Linguajar inapropriado</p>
                    <p>Compras online</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="footer__bottom">
          <p>Todos os direitos reservados</p>
          <div className="footer__links">
            <p>Termos de serviço</p>
            <p>Política de privacidade</p>
          </div>
          <p className="footer__design">
            Design by <a href="#">Vortex Design</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;