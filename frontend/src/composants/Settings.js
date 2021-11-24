
import "../styles/Settings.css";
import React, { Component } from "react";

class Settings extends Component {
  
  constructor(city){
    // Si la ville n'est pas définit alors la ville par défault est Paris
    if(city === ""){
      city = "BREST";
    }
    
  }

  info(city) {
    return city;
  }
  
 
  
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
      </div>
      
    );
  }
}

export default Settings;
