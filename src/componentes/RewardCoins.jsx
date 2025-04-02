import React from "react";

import CoinImg from "../assets/coin-img.png";
import BannerImg from "../assets/banner-image.png";

import { MdArrowRightAlt } from "react-icons/md";

import "../styles/RewardCoins.css";


function RewardCoins() {
  return (
    <div className="section__reward__coins">
      <div className="box__reward__coins">
        <div className="box__img__coin center">
          <img src={CoinImg} alt="Moeda" />
        </div>
        <div className="box__text__reward__coins">
          <h3 className="text__reward__coins">
            Ganhe <span className="highlight-number">100</span> moedas grátis!
          </h3>
          <p style={{ fontSize: "12px" }}>ao fazer seu cadastro</p>
          <button className="btn__reward__coins">
            Cadastre-se agora <MdArrowRightAlt />
          </button>
        </div>
      </div>

      <div className="box__banner__img">
        <img src={BannerImg} className="inner__banner__img" alt="Banner promocional" />
      </div>
    </div>
  );
}

export default RewardCoins;
