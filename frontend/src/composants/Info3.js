//Les imports
import '../styles/Main.css';
import React from "react";
import { NavLink } from 'react-router-dom';
import WindAPI from "../js/WindAPI";

//Ce compostant permet dafficher les boutons et l'information numéro 3 qui est la force du vent 

class Info3 extends React.Component {
//Les boutons sont affichés à l'aide de Navlink
  render() {
    return (
      <div class="container">
        <div class="row">
          <h1 className="font">Overview</h1>
        </div>

        <div class="row" >
          <div class="col" className="top">
            <button className="butts">
              <NavLink to="/" className="navlink"
                activeClassName="nav-active">
                Méteo
              </NavLink>
            </button >

            <button className="butts">
              <NavLink to="/visibilite" className="navlink"
                activeClassName="nav-active">
                Visiblité
              </NavLink>
            </button >

            <button className="butts">
              <NavLink to="/vent" className="navlink"
                activeClassName="nav-active">
                Vent
              </NavLink>
            </button >
          </div>
        </div>

        <div class="row" >
          <div class="col" className="top">
            <button className="butts">
              <NavLink to="/maree" className="navlink"
                activeClassName="nav-active">
                Marée
              </NavLink>
            </button >

            <button className="butts">
              <NavLink to="/astronomie" className="navlink"
                activeClassName="nav-active">
                Astronomie
              </NavLink>
            </button >

            <button className="butts">
              <NavLink to="/visibilite" className="navlink"
                activeClassName="nav-active">
                Back
              </NavLink>
            </button >
          </div>
        </div>

        <div class="row">
          <div className="mid">
            <article>
              <WindAPI city={global.config.i18n.city} />
            </article>
          </div>
        </div>
      </div>
      //L'API WindAPI récupérant les informations concernant le vent est appelée 
    );
  }
}

export default Info3;