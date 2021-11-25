import '../styles/Aside.css';
import React from "react";
import {NavLink} from "react-router-dom";

//On utilise NavLink pour renvoyer aux autres pages en utilisant React
//On peut ainsi créer des animations de changement de pages
function Aside() {
  return (
    <div class="container" className="tool" >
      
      <h1 className="nom">Navig Today</h1>
      <ul>
        <li class="row">
          <NavLink to="/"  className="hover" 
          activeClassName="nav-active">
            Overview
          </NavLink>
        </li>

        <li class="row">
          <NavLink to="/contact"  className="hover" 
          activeClassName="nav-active">
            Contact
          </NavLink>
        </li>

        <li class = "row" >
          <NavLink to="/plusinfo"  className="hover" 
          activeClassName="nav-active">
            Plus d'infos
          </NavLink>
        </li>

        <li class = "row" >
          <NavLink to="/reglages"  className="hover"
          activeClassName="nav-active">
            Réglages
          </NavLink>
        </li>

      </ul>

    </div>
  );
}

export default Aside;