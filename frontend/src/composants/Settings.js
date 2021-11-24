
import "../styles/Settings.css";
import React, { Component } from "react";
import Index from "../js/Index";

class Settings extends Component {
  state = {
    city: "Paris"
  };

  info(city) {
    return city;
  }
  
 
  
  handleChange = event => {
    this.setState({ city: event.target.value });
  };

  render() {
    const { city } = this.state;
    return (
      <div className="App">
        <h2> Ma super station météo</h2>

        <input
          type="text"
          name="Ville"
          value={city}
          onChange={this.handleChange}
        />

        <Index city={city} />
      </div>
      
    );
  }
}

export default Settings;
