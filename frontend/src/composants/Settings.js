//Les imports
import "../styles/Settings.css";
import React, { Component } from "react";
import Form from "../integrer/Form";
import '../styles/Apis.css'

//Composant permettant à l'utilisateur de changer le nom de la ville 
//Ce changement va impacter tous les autres composants avec pour paramètre la variable city

class Settings extends Component {
  // Si la ville n'est pas définit alors la ville par défault est Cherbourg
  state = {
    city: global.config.i18n.city
  };

  handleSubmitForm(event) {
    alert("Full Name: " + this.state.global.config.i18n.city);
    event.preventDefault();
  }

  //Les changements changent le contenu de la variable city
  handleChange(event) {
    var value = event.target.value;
    global.config.i18n.city = event.target.value;
    this.setState({
      fullName: value,
    });
  }
  //Affiche la zone de text et appelle la fonction handleChange pour sauvegarder la saisie
  render() {
    return (
      <div className="Reglage">
        <div>
          <h3>Entrer le nom de la ville :</h3>
          <input
            type="text"
            value={global.config.i18n.city}
            onChange={event => this.handleChange(event)}
          />
        </div>
        <div className="margtop">
          <Form />
        </div>
      </div>
    );
  }
}
//On export la variable saisie pour être réutilisée ailleurs
export const city = true;
console.log(city);


export default Settings;
