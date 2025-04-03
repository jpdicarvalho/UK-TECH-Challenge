import React, { useState } from "react";
import Header from "../componentes/Header";
import FeaturedGames from "../componentes/FeaturedGames";
import MostPlayedGamesSlider from "../componentes/MostPlayedGamesSlider";
import AnotherGamesSlider from "../componentes/AnotherGamesSlider";
import CardsGamesSlider from "../componentes/CardsGamesSlider";
import RewardCoins from "../componentes/RewardCoins";
import RecommendationSection from "../componentes/RecommendationSection";
import StrategyGamesSlider from "../componentes/StrategyGamesSlider";
import Footer from "../componentes/Footer";


import { featuredGames, mostPlayedGames, anotherGames, cardsGames, recomendationGames, strategeGames } from "../data/games";

import "../styles/GetStarted.css";

function GetStarted() {
  const [isBtnSelected, setIsBtnSelected] = useState(false);
  const [gameSelected, setGameSelected] = useState(1);

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
      <AnotherGamesSlider games={anotherGames} />
      <CardsGamesSlider title="Jogos de cartas" games={cardsGames} />
      <RecommendationSection title="Recomendações" games={recomendationGames} />
      <StrategyGamesSlider title="Jogos de estratégia" games={strategeGames} />
      <Footer />
    </>
  );
}

export default GetStarted;