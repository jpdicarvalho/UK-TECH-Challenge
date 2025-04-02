import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FiUser } from "react-icons/fi";

import LabelGame from "../assets/label-game.png";

import "swiper/css";
import "../styles/RecommendationSection.css";

function RecommendationSection({ title, games }) {
  return (
    <div className="section__most__played__games">
      <div className="header__most__played__games">
        <h3 className="tittle__most__payed__games">{title}</h3>
        <div className="box__see__more center">
          <p className="text__see__more">VER MAIS</p>
        </div>
      </div>

      <div className="container__recomendation__game">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          speed={7000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="container__Swiper"
        >
          {games.map((game) => (
            <SwiperSlide key={game.id} className="container__SwiperSlide">
              <div className="card__recomendation__game">
                <div className="image__wrapper__card__most__payed__game">
                  <img src={game.image} className="img__cover__game" alt={game.name} />
                  <div className="img__mask__card__most__payed__game" />
                </div>
              </div>

              <div className="box__amount__users in__card__recomendation__game center">
                <FiUser />
                {game.users}
              </div>

              <div className="box__details__recomendation__game">
                <div className="box__img__label__recomendation__game">
                  <img src={LabelGame} className="inner__img__label__game" alt="Gênero do jogo" />
                  <p className="text__label__recomendation__game">{game.label}</p>
                </div>
                <h3>{game.name}</h3>
                <p className="text__message__label__recomendation__game">{game.message}</p>
                <button className="btn__play__recomendation__game">Jogar agora</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default RecommendationSection;
