//Les imports
import React, { Component } from "react";
import "../styles/Apis.css";

//composant récupérant et affichant les données spécifiques de l'API VisibilityAPI 

class Visibilty extends Component {
  render() {
    //Les data sont récupérées de VisibilityAPI
    const { data } = this.props;
   // console.log("data", data);
    if (!data) return null;

    //La date est récupérée de data
    const { dt_txt } = data;
    //La visibilité est récupérée de data
    const { visibility } = data;
    
    return (
      //On affiche les éléments récupérés
      <div className="margtop">
        <h4>{dt_txt}</h4>        
        <h5>{visibility} mètres</h5>
      </div>
    );
  }
}

export default Visibilty;
