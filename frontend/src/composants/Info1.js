import '../styles/Main.css';
import React from "react";
import { NavLink } from 'react-router-dom';
import Forecast from '../js/Index';


class Info1 extends React.Component {

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
            <Forecast city={global.config.i18n.city}/>
          </div>
        </div>



      </div>
    );
  }
}

export default Info1;

