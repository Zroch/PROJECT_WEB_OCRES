import '../styles/Main.css';
import React from "react";
import { NavLink } from 'react-router-dom';
import Apitest from '../js/Apitest';

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
              <NavLink to="/info1" className="navlink"
                activeClassName="nav-active">
                Méteo
              </NavLink>
            </button >
            <button className="butts">
              <NavLink to="/info2" className="navlink"
                activeClassName="nav-active">
                Marée
              </NavLink>
            </button >
            <button className="butts">
              <NavLink to="/info3" className="navlink"
                activeClassName="nav-active">
                Vent
              </NavLink>
            </button >
            <button className="butts">
              <NavLink to="/info4" className="navlink"
                activeClassName="nav-active">
                Courants
              </NavLink>
            </button >
          </div>
        </div>


        <div class="row">
          <div className="mid">
            <Apitest />
          </div>
        </div>



      </div>
    );
  }
}

export default Info1;