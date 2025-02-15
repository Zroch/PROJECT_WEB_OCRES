//Les imports
import '../styles/Aside.css';
import React from "react";
import {NavLink} from "react-router-dom";

//Aside est le composant réutilisable qui permet d'avoir la barre de navigation sur le côté

//On utilise NavLink pour renvoyer aux autres pages en utilisant React
function Aside() {
  return (
    <div class="container" className="tool" >
      
      <h1 className="nom">Navig Today</h1>

      <ul>
        <li class="row">
          <NavLink to="/"  className="hover" 
          activeClassName="nav-active">
            <div className="navbar">Overview</div>
          </NavLink>
        </li>

        <li class = "row" >
          <NavLink to="/plusinfo"  className="hover" 
          activeClassName="nav-active">
            <div className="navbar">Plus d'infos</div>
          </NavLink>
        </li>

        <li class = "row" >
          <NavLink to="/reglages"  className="hover"
          activeClassName="nav-active">
            <div className="navbar">Réglages</div>
          </NavLink>
        </li>

      </ul>

    </div>
  );
}

export default Aside;
