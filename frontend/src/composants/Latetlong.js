import React, { Component } from "react";
import TidesAPI from "../containers/Forecast/TidesAPI";
import "./Day.css";

class Latetlong extends Component {
  render() {
    const { data } = this.props;
    //console.log("data", data);
    if (!data) return null;

    const { lat } = data.coord;
    const { lon } = data.coord;
    
    return (             
      <div>{lat} {lon} 
      <TidesAPI lat={lat} lon={lon} />
      </div>
    )
  }
}

export default Latetlong;