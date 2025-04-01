
import { useState } from "react"

import Logo from "../src/assets/logo.png"
import CrashImg from "../src/assets/crash-img.png"

import './GetStarted.css'


function GetStarted() {
    const [isBtnSelected, setIsBtnSelected] = useState(false)
    
    //<img src={CrashImg} alt="" />
    
    return (
      <>
         <div className="section__background__img">
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
              <div
                className="inner__games"
                onClick={()=> setIsBtnSelected(false)}>
                <img src={CrashImg}  className="inner__img__game" alt="" />
                <p className="name__game">Crash Team Racing Nitro</p>
              </div>

              <div className="inner__games">
                <img src={CrashImg}  className="inner__img__game" alt="" />
                <p className="name__game">Crash Team Racing Nitro</p>
              </div>

              <div className="inner__games">
                <img src={CrashImg}  className="inner__img__game" alt="" />
              </div>
            </div>
            <div className="box__games__selected">games selected</div>
         </div>        
      </>
    )
  }
  
  export default GetStarted