
import { useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import Logo from "../src/assets/logo.png"
import LabelGame from "../src/assets/label-game.png"
import CrashImg from "../src/assets/crash-img.png"
import MinecraftImg from "../src/assets/minecraft-img.jpg"
import GenshinImg from "../src/assets/genshin-img.jpg"
import NineImg from "../src/assets/nine-img.png"
import GenshinImpactImg from "../src/assets/genshin-capa-img.png"
import AliensImg from "../src/assets/aliens-img.png"
import AgeOfImpiresIImg from "../src/assets/age-of-empires-img.png"
import BannerImg from "../src/assets/banner-image.png"
import CoinImg from "../src/assets/coin-img.png"

import { IoIosHeartEmpty } from "react-icons/io";
import { IoPlay } from "react-icons/io5";
import { MdArrowRightAlt } from "react-icons/md";


import './GetStarted.css'

const featuredGames = [
  {
    id: 1,
    name: 'Crash Team Racing Nitro',
    image: CrashImg,
    label: 'Corrida e voo'
  },
  {
    id: 2,
    name: 'Minecraft',
    image: MinecraftImg,
    label: 'Aventura e sobrevivência'
  },
  {
    id: 3,
    name: 'Genshin Impact',
    image: GenshinImg,
    label: 'RPG de ação e mundo aberto'
  }
]

const mostPlayedGames = [
  {
    id: 1,
    name: 'Nine  Sols',
    image: NineImg,
    users: 224
  },
  {
    id: 2,
    name: 'Genish Impact',
    image: GenshinImpactImg,
    users: 224
  },
  {
    id: 3,
    name: 'Aliens Dark Descent',
    image: AliensImg,
    users: 224
  },
  {
    id: 4,
    name: 'Age of Empires II',
    image: AgeOfImpiresIImg,
    users: 224
  },
  {
    id: 5,
    name: 'Minecraft',
    image: MinecraftImg,
    users: 224
  }
]

function GetStarted() {
    const [isBtnSelected, setIsBtnSelected] = useState(false)
    const [gameSelected, setGameSelected] = useState([0]);

    const toggleItem = (itemId) => {
      if (gameSelected === itemId) {
        setGameSelected(null); 
      } else {
        setGameSelected(itemId);
      }
    };

    const selectedGame = featuredGames.find(game => game.id === gameSelected);


    return (
      <>
          <div className="section__background__img">
            {selectedGame && (
              <>
                <img
                  src={selectedGame.image}
                  className="inner__background__img__game__selected"
                  alt={selectedGame.name}
                />
                <div className="background-overlay" />
              </>
            )}
          </div>
         <div className="section__header">
            <div className="box__logo">
              <img src={Logo}  className="inner__logo" alt="" />
            </div>
            <div className="box__btns">
              <button
                className={`inner__btn ${isBtnSelected ? 'btn__active':''}`}
                onClick={()=> setIsBtnSelected(true)}>
                  Acessar conta
              </button>

              <button 
                className={`inner__btn ${isBtnSelected ? '':'btn__active'}`}
                onClick={()=> setIsBtnSelected(false)}>
                  Cadastre-se
                </button>
            </div>
         </div>
         <div className="section__featured__games">
            <div className="box__games">
              {featuredGames.map((game, index) => (
                <div
                  key={index}
                  className={`game-card ${gameSelected === game.id ? 'game-card--active' : ''}`}
                  onClick={() => toggleItem(game.id)}
                >
                  <img src={game.image} className="game-image" alt={game.name} />
                  <div className="overlay">
                      <h3 className={`game-title ${gameSelected === game.id ? 'game-title--active' : ''}`}>{game.name}</h3>
                  </div>
                </div>
              ))}
            </div>
            
              {selectedGame && (
                <div className="box__info__games__selected">
                  <h3 className="name__game">{selectedGame.name}</h3>
                  <div className="box__label__game">
                    <img src={LabelGame} className="inner__img__label__game" alt="Gênero do jogo" />
                    <p className="text__label__game">{selectedGame.label} • Novidade</p>
                  </div>
                  
                  <div className="box__btn__play__game">
                    <p className="text__add__to__favorites">Adicionar aos favoritos</p>
                    <IoIosHeartEmpty className="icon__IoIosHeartEmpty"/>
                    <button className="inner__btn btn__active center">
                      Jogar agora
                      <IoPlay className="icon__IoPlay"/>
                    </button>
                  </div>

                </div>
              )}
          </div>

          <div className="section__most__played__games">
            <div className="background__wrapper">
              <img src={NineImg} className="img__background" alt="" />
              <div className="background__overlay" />
            </div>

            <div className="header__most__played__games">
              <h3 className="tittle__most__payed__games">Jogos mais jogados</h3>
              <div className="box__see__more center">
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
                {mostPlayedGames.map((game, index) => (
                  <SwiperSlide key={index}>
                    <div className="card__most__payed__game">
                      <img src={game.image} className="img__cover__game" alt={game.name} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="section__reward__coins">
            <div className="box__reward__coins">
              <div className="box__img__coin center">
                <img src={CoinImg} alt="" />
              </div>
              <div className="box__text__reward__coins">
                <h3 className="text__reward__coins">
                  Ganhe <span className="highlight-number">100</span> moedas grátis!
                </h3>
                <p style={{fontSize: '12px'}}>ao fazer seu cadastro</p>
                <button className="btn__reward__coins">Cadastre-se agora <MdArrowRightAlt /></button>
              </div>
            </div>
            <div className="box__banner__img">
              <img src={BannerImg} className="inner__banner__img" alt="" />
            </div>
          </div>
      </>
    )
  }
  
  export default GetStarted