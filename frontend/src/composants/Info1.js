//Les imports
import '../styles/Main.css';
import React from "react";
import { NavLink } from 'react-router-dom';
import Forecast from '../js/Index';

//Ce compostant permet dafficher les boutons et l'information numéro 1 qui est la météo 
class Info1 extends React.Component {

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
              <NavLink to="/ports" className="navlink"
                activeClassName="nav-active">
                Ports
              </NavLink>
            </button >
          </div>
        </div>



        <div class="row">
          <div className="mid">
            <Forecast city={global.config.i18n.city} />
          </div>
        </div>



      </div>
      //L'api Forecast affichant la météo est appelée
    );
  }
}

export default Info1;

