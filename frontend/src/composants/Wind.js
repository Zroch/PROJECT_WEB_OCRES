import React, { Component } from "react";
import '../styles/Apis.css';

class Day extends Component {
  render() {
    const { data } = this.props;
   // console.log("data", data);
    if (!data) return null;

    const { dt_txt } = data;
    const { deg } = data.wind;
    const {speed} = data.wind;
    const {gust} = data.wind;
    return (
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
