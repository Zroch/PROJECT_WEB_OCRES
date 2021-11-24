
import "../styles/Settings.css";
import React, { Component } from "react";
import Apitest from "../js/Apitest";



class Settings extends Component {
    // Si la ville n'est pas définit alors la ville par défault est Paris
    state = {
      city: "Paris"
    };
    
  handleChange = event => {
    this.setState({ city: event.target.value });
  };

  render() {
    const { city } = this.state;
    return (
      <div className="bot">
        <h2> Entrez votre zone</h2>

        <input
          type="text"
          name="Ville"
          value={city}
          onChange={this.handleChange}
        />

        <Apitest city={city}/>
      </div>
      
    );
  }
}



export default Settings;
