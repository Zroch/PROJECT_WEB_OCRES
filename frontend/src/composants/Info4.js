import '../styles/Main.css';
import React from "react";
import { NavLink } from 'react-router-dom';
import LatetlongAPI from '../js/LatetlongAPI';

class Info4 extends React.Component {

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
                Visibilité
              </NavLink>
            </button >

            <button className="butts">
              <NavLink to="/vent" className="navlink"
                activeClassName="nav-active">
                Vent
              </NavLink>
            </button >
            
            <button className="butts">
              <NavLink to="/maree" className="navlink"
                activeClassName="nav-active">
                Marée
              </NavLink>
            </button >
          </div>
        </div>
        <div class="row" >
          <div class="col" className="top">
            <button className="butts">
              <NavLink to="/" className="navlink"
                activeClassName="nav-active">
                1 
              </NavLink>
            </button >

            <button className="butts">
              <NavLink to="/visibilite" className="navlink"
                activeClassName="nav-active">
                2
              </NavLink>
            </button >

            <button className="butts">
              <NavLink to="/vent" className="navlink"
                activeClassName="nav-active">
                3
              </NavLink>
            </button >
            
            <button className="butts">
              <NavLink to="/courant" className="navlink"
                activeClassName="nav-active">
                4
              </NavLink>
            </button >
          </div>
        </div>

        <div class="row">
          <div className="mid">
            <article>
            
            <LatetlongAPI city1={global.config.i18n.city}/>
            
            </article>
          </div>
        </div>



      </div>
    );
  }
}

export default Info4;