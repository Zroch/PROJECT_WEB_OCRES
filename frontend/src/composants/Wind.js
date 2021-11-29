//Les imports
import React, { Component } from "react";
import '../styles/Apis.css';

//Récupère des informations spécifiques de WindAPI 

class Day extends Component {
  render() {
    //Les data sont récupérées de WindAPI
    const { data } = this.props;
    // console.log("data", data);
    if (!data) return null;

    //La date est récupérée de data
    const { dt_txt } = data;
    //Dans la branche wind on récupère la direction du vent en degrès
    const { deg } = data.wind;
    //Dans la branche wind on récupère la vitess du vent en km/h
    const { speed } = data.wind;
    //Dans la branche wind on récupère la puissance des rafales de vent en km/h
    const { gust } = data.wind;

    return (
      //On affiche les données récupérées
      <div className="margtop">
        <h4>{dt_txt}</h4>
        <h5>La vitesse du vent est de {speed} km/h</h5>
        <h5>Avec des rafales atteignants {gust} km/h</h5>
        <h5>Avec pour direction : {deg} degrès</h5>
      </div>
    );
  }
}

export default Day;
