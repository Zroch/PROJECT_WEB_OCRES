import React, { Component } from "react";
import TidesAPI from "../js/TidesAPI";
import "../styles/Apis.css";

class Latetlong extends Component {
  render() {
    const { data } = this.props;
    //console.log("data", data);
    if (!data) return null;

    const { lat } = data.coord;
    const { lon } = data.coord;
    
    return (             
      <div className ="margtop">
        <h3>Lattitude de la ville :</h3><h4>{lat}</h4><h3>Longitude :</h3><h4>{lon}</h4> 
      <TidesAPI lat={lat} lon={lon} />
      </div>
    )
  }
}

export default Latetlong;