import React, { Component } from "react";
import '../styles/Apis.css';

class Day extends Component {
  render() {
    const { data } = this.props;
   // console.log("data", data);
    if (!data) return null;

    const { dt_txt } = data;
    const { tideTime } = data.weather.tides.tide_data[0];
    const {tideHeight_mt} = data.weather.tides.tide_data[0];
    const {tide_type} = data.weather.tides.tide_data[0];
    return (
      <div className="margtop">
        <h4>{dt_txt}</h4>
        <h5>La mer sera {tide_type} à { tideTime }</h5>
        <h5>avec une hauteur de {tideHeight_mt}</h5>
      </div>
    );
  }
}

export default Day;
