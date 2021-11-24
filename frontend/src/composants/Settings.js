
import "../styles/Settings.css";
import React, { Component } from "react";

class Settings extends Component {
  state = {
    city: "Brest"
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
      </div>
    );
  }
}

export default Settings;