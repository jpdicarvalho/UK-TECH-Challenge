
import { useState } from "react"
import Logo from "../src/assets/logo.png"

import './GetStarted.css'

function GetStarted() {
    const [isBtnSelected, setIsBtnSelected] = useState(false)

    return (
      <>
         <div className="section__background__img">background</div>
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
            <div className="box__games">box games</div>
            <div className="box__games__selected">games selected</div>
         </div>        
      </>
    )
  }
  
  export default GetStarted