//Les imports
import '../styles/Main.css';
import React from "react";
import { NavLink } from 'react-router-dom';
import VisiblityAPI from '../js/VisibilityAPI';

//Ce compostant permet dafficher les boutons et l'information numéro 2 qui est la visibilité 

class Info2 extends React.Component {

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

            <VisiblityAPI city={global.config.i18n.city} />

          </div>
        </div>
      </div>
      //L'API VisibilityAPI affichant la visibilité est appelée 
    );
  }
}

export default Info2;