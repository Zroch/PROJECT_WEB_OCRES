//Les imports
import '../styles/Main.css';
import React from "react";
import { NavLink } from 'react-router-dom';
import AstronomieAPI from '../js/AstronomieAPI';

//Ce compostant permet dafficher les boutons et l'information numéro 5 qui est l'astronomie 

class Info4 extends React.Component {
//Les boutons sont affichés à l'aide de Navlink

  render() {
    return (
      //Les boutons sont affichés à l'aide de Navlink
      <div class="container">

        <div class="row">
          <h1 className="font">Overview</h1>
        </div>

        <div class="row" >
          <div class="col" className="top">
            <button className="butts">
              <NavLink to="/" className="navlink"
                activeClassName="nav-active">
                <div className="titre">Méteo</div>
              </NavLink>
            </button >

            <button className="butts">
              <NavLink to="/visibilite" className="navlink"
                activeClassName="nav-active">
                <div className="titre">Visiblité</div>
              </NavLink>
            </button >

            <button className="butts">
              <NavLink to="/vent" className="navlink"
                activeClassName="nav-active">
                <div className="titre">Vent</div>
              </NavLink>
            </button >
          </div>
        </div>

        <div class="row" >
          <div class="col" className="top">
            <button className="butts">
              <NavLink to="/maree" className="navlink"
                activeClassName="nav-active">
                <div className="titre">Marée</div>
              </NavLink>
            </button >

            <button className="butts">
              <NavLink to="/astronomie" className="navlink"
                activeClassName="nav-active">
                <div className="titre">Astronomie</div>
              </NavLink>
            </button >

            <button className="butts">
              <NavLink to="/ports" className="navlink"
                activeClassName="nav-active">
                <div className="titre">Ports</div>
              </NavLink>
            </button >
          </div>
        </div>
        
        <div class="row">
          <div className="mid">
            <article>
            
            <AstronomieAPI city1={global.config.i18n.city}/>
            
            </article>
          </div>
        </div>
      </div>
      //L'API AstronomieAPI est appelée afin d'afficher les horaires de levé et de couché du soleil

    );
  }
}

export default Info4;