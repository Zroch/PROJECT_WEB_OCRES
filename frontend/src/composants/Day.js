import React, { Component } from "react";
import '../styles/Apis.css';

class Day extends Component {
  render() {
    const { data } = this.props;
    console.log("data", data);
    if (!data) return null;

    const { dt_txt } = data;
    const { temp } = data.main;
    const { icon, description } = data.weather[0];
    return (
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
