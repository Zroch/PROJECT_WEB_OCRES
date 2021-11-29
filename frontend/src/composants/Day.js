//Les imports
import React, { Component } from "react";
import '../styles/Apis.css';

//Code repris du TP3 version react https://github.com/Zroch/Ing4_Weather_app

//On récupère les informations météo
class Day extends Component {
  render() {
    const { data } = this.props;
    console.log("data", data);
    if (!data) return null;

    //dt_txt récupère la date
    const { dt_txt } = data;
    //temp récupère la température
    const { temp } = data.main;
    //On récupère les logos correspondants à la météo
    const { icon, description } = data.weather[0];
    return (
      //On affiche les éléments récupérés
      <div className="margtop">
        <h4>{dt_txt}</h4>
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt="weather"
        />
        <h5>{description}</h5>
        <h3>{temp} celsius</h3>
      </div>
    );
  }
}

export default Day;
