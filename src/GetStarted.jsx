import React, { useState } from "react";
import Header from "../src/componentes/Header";
import FeaturedGames from "../src/componentes/FeaturedGames";
import MostPlayedGamesSlider from "./componentes/MostPlayedGamesSlider";
import ActionGamesSlider from "./componentes/ActionGamesSlider";
import CardsGamesSlider from "./componentes/CardsGamesSlider";
import RewardCoins from "../src/componentes/RewardCoins";
import RecommendationSection from "../src/componentes/RecommendationSection";

import { featuredGames, mostPlayedGames, recomendationGames } from "../src/data/games";

import "./GetStarted.css";

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

      <MostPlayedGamesSlider title="Jogos mais jogados" games={mostPlayedGames} />
      <RewardCoins />
      <ActionGamesSlider title="Ação" games={mostPlayedGames} />
      <CardsGamesSlider title="Jogos de cartas" games={mostPlayedGames} />
      <RecommendationSection title="Recomendações" games={recomendationGames} />
      <MostPlayedGamesSlider title="Jogos de estratégia" games={mostPlayedGames} />
    </>
  );
}

export default GetStarted;