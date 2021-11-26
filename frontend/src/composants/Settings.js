
import "../styles/Settings.css";
import React, { Component } from "react";
import Index from "../js/Index";
import config from '../config.js';




class Settings extends Component {
    // Si la ville n'est pas définit alors la ville par défault est Paris
    state = {
      city: global.config.i18n.city
    };
    
    handleSubmitForm(event) {
      alert("Full Name: " + this.state.global.config.i18n.city);
      event.preventDefault();
    }
    handleChange(event) {
      var value = event.target.value;
      global.config.i18n.city = event.target.value;
      this.setState({
        fullName: value,
      });
    }
    render() {
      return (
       <div className="Reglage">
          <label>
            Entrer le nom de la ville :
            <input
              type="text"
              value={global.config.i18n.city}
              onChange={event => this.handleChange(event)}
              
            />
          </label>
        
         
         
          </div>
        
      );
    }
  }
export const city = true;
console.log(city);


export default Settings;
