import React from "react";

import LabelGame from "../games_images/label-game.png";

import { IoIosHeartEmpty } from "react-icons/io";
import { IoPlay } from "react-icons/io5";

import "../styles/FeaturedGames.css"

function FeaturedGames({ featuredGames, gameSelected, onSelectGame }) {
  const selectedGame = featuredGames.find((game) => game.id === gameSelected);

  return (
    <div className="section__featured__games">
      <div className="box__games">
        {featuredGames.map((game) => (
          <div
            key={game.id}
            className={`game-card ${gameSelected === game.id ? "game-card--active" : ""}`}
            onClick={() => onSelectGame(game.id)}
          >
            <img src={game.image} className="game-image" alt={game.name} />
            <div className="overlay">
              <h3 className={`game-title ${gameSelected === game.id ? "game-title--active" : ""}`}>
                {game.name}
              </h3>
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
            <IoIosHeartEmpty className="icon__IoIosHeartEmpty" />
            <button className="inner__btn btn__active center">
              Jogar agora
              <IoPlay className="icon__IoPlay" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeaturedGames;