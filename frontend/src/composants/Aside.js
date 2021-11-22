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
        <NavLink to="/"  className="hover" id="un"
        activeClassName="nav-active">
          Overview
        </NavLink>

        <NavLink to="contact"  className="hover" id="deux"
        activeClassName="nav-active">
          Contact
        </NavLink>

        <NavLink to="plusinfo"  className="hover" id="trois"
        activeClassName="nav-active">
          Plus d'infos
        </NavLink>
      </ul>

    </div>
  );
}

export default Aside;