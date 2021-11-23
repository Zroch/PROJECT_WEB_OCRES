
import "../styles/Settings.css";
import React, { Component } from "react";

class Settings extends Component {
  state = {
    city: "Brest"
  };

  handleClick = event => {
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
        />
        <button onClick={this.handleClick}> cliquez pour actualiser</button>
      </div>
    );
  }
}

export default Settings;