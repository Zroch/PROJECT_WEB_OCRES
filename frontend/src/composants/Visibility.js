import React, { Component } from "react";
import "../styles/Apis.css";

class Visibilty extends Component {
  render() {
    const { data } = this.props;
   // console.log("data", data);
    if (!data) return null;

    const { dt_txt } = data;
    const { visibility } = data;
    
    return (
      <div className="margtop">
        <h4>{dt_txt}</h4>        
        <h5>{visibility} mètres</h5>
      </div>
    );
  }
}

export default Visibilty;
