import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FiUser } from "react-icons/fi";
import { MdArrowRightAlt } from "react-icons/md";

import NineImg from "../games_images/nine-img.png";

import "swiper/css";

import "../styles/GameSlider.css";

function MostPlayedGamesSlider({ title, games }) {
  return (
    <div className="section__most__played__games">
      <div className="background__wrapper">
        <img src={NineImg} className="img__background" alt="" />
        <div className="background__overlay" />
      </div>
      <div className="header__most__played__games">
        <h3 className="tittle__most__payed__games">{title}</h3>
        <div className="box__see__more">
          <p className="text__see__more">VER MAIS</p>
          <MdArrowRightAlt />
        </div>
      </div>

      <div className="container__most__played__games">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
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
        >
          {games.map((game) => (
            <SwiperSlide key={game.id}>
              <div className="card__most__payed__game">
                <div className="image__wrapper__card__most__payed__game">
                  <img src={game.image} className="img__cover__game" alt={game.name} />
                  <div className="img__mask__card__most__payed__game" />
                </div>
              </div>

              <div className="box__amount__users">
                <FiUser />
                {game.users}
              </div>

              <div className="box__name__game__most__payed__game">
                {game.name}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MostPlayedGamesSlider;
