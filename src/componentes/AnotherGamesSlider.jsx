import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FiUser } from "react-icons/fi";

import "swiper/css";

import "../styles/GameSlider.css";
import "../styles/AnotherGamesSlider.css";

function AnotherGamesSlider({ games }) {
  return (
    <div className="section__most__played__games">

      <div className="container__card__anhother__game">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          speed={7000}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: true, 
            pauseOnMouseEnter: true, 
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="Swiper__card__anhother__game"
        >
          {games.map((game) => (
            <SwiperSlide key={game.id} className="SwiperSlide__card__anhother__game">
              <div className="card__anhother__game">
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

export default AnotherGamesSlider;
