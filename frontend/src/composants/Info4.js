//Les imports
import '../styles/Main.css';
import React from "react";
import { NavLink } from 'react-router-dom';
import LatetlongAPI from '../js/LatetlongAPI';

//Ce compostant permet dafficher les boutons et l'information numéro 4 qui est la marée 

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
              <LatetlongAPI city1={global.config.i18n.city} />
            </article>
          </div>
        </div>
      </div>
      //L'API LatetlongAPI est appelée afin d'afficher les marées
    );
  }
}

export default Info4;