
import { useState } from "react"

import Logo from "../src/assets/logo.png"
import LabelGame from "../src/assets/label-game.png"
import CrashImg from "../src/assets/crash-img.png"
import MinecraftImg from "../src/assets/minecraft-img.jpg"
import GenshinImg from "../src/assets/genshin-img.jpg"


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
            <div className="box__info__games__selected">
              {selectedGame && (
                <div>
                  <h3 className="name__game">{selectedGame.name}</h3>
                  <div className="box__label__game">
                    <img src={LabelGame} className="inner__img__label__game" alt="Gênero do jogo" />
                    <p className="text__label__game">{selectedGame.label} • Novidade</p>
                  </div>
                  
                </div>
              )}
            </div>
          </div>        
      </>
    )
  }
  
  export default GetStarted