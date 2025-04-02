import React, { useState } from "react";
import Header from "../components/Header";
import FeaturedGames from "../components/FeaturedGames";
import GameSlider from "../components/GameSlider";
import RewardCoins from "../components/RewardCoins";
import RecommendationSection from "../components/RecommendationSection";

import { featuredGames, mostPlayedGames, recomendationGames } from "../data/games";
import NineImg from "../assets/nine-img.png"; // usado como background

import "../styles/GetStarted.css"; // mantém seu CSS atual

function GetStarted() {
  const [isBtnSelected, setIsBtnSelected] = useState(false);
  const [gameSelected, setGameSelected] = useState(null);

  const selectedGame = featuredGames.find((game) => game.id === gameSelected);

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

      <Header
        isBtnSelected={isBtnSelected}
        onLoginClick={() => setIsBtnSelected(true)}
        onRegisterClick={() => setIsBtnSelected(false)}
      />

      <FeaturedGames
        featuredGames={featuredGames}
        gameSelected={gameSelected}
        onSelectGame={setGameSelected}
      />

      <GameSlider title="Jogos mais jogados" games={mostPlayedGames} />
      <RewardCoins />
      <GameSlider title="Ação" games={mostPlayedGames} />
      <GameSlider title="Jogos de cartas" games={mostPlayedGames} />
      <RecommendationSection title="Recomendações" games={recomendationGames} />
      <GameSlider title="Jogos de estratégia" games={mostPlayedGames} />
    </>
  );
}

export default GetStarted;