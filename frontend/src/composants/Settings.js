
import "../styles/Main.css";
import React, { Component } from "react";
import WheatherAPI from "../js/WeatherAPI";
import WindAPI from "../js/WindAPI";


<<<<<<< HEAD

class Settings extends Component {
    // Si la ville n'est pas définit alors la ville par défault est Paris
    state = {
      city: "Paris"
    };
    
=======
  info(city) {
    return city;
  }

>>>>>>> 78f8346471d49a3824eca34065ad80e9184b1d8e
  handleChange = event => {
    this.setState({ city: event.target.value });
  };

  render() {
    const { city } = this.state;
    return (
      <div>
        <h1 className="titre1">Overview</h1>
        <div class="row" className="top">
          <h2 className="enter"> Saisissez quelque chose</h2>
          <div className="input">
            <input className="input"
              type="text"
              name="Ville"
              value={city}
              onChange={this.handleChange}
            />
          </div>
          <div class="container" className="mid">
            <div class="row">
              <div class="col-4">
                <WheatherAPI city={city} />
              </div>
              <div class="col-4">
                <WindAPI city={city} />
              </div>
              <div class="col-4">
                <WheatherAPI city={city} />
              </div>
            </div>
            <div class="row">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default Settings;
