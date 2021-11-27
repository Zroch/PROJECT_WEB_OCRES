import '../styles/Main.css';
import React from "react";
import { NavLink } from 'react-router-dom';
import WindAPI from "../js/WindAPI";

class Info3 extends React.Component {

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
              <NavLink to="/maree" className="navlink"
                activeClassName="nav-active">
                Marée
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


        <div class="row">
          <div className="mid">
            <article>
            <WindAPI city={global.config.i18n.city}/>
            </article>
          </div>
        </div>



      </div>
    );
  }
}

export default Info3;