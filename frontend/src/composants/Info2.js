import '../styles/Main.css';
import React from "react";
import { NavLink } from 'react-router-dom';
import VisiblityAPI from '../js/VisibilityAPI';

class Info2 extends React.Component {

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
              <NavLink to="/courant" className="navlink"
                activeClassName="nav-active">
                Courants
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
          
            <VisiblityAPI city={global.config.i18n.city}/>
          
          </div>
        </div>



      </div>
    );
  }
}

export default Info2;