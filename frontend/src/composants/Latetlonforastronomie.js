//Les imports
import React, { Component } from "react";
import AstroAPI from "../js/AstroAPI";
import "../styles/Apis.css";

//API permettant de récupérer la latitude et longitude de la ville saisie 
class Latetlongforastronomie extends Component {
  render() {
    //On récupère les données de l'API
    const { data } = this.props;
    //console.log("data", data);
    if (!data) return null;

    //On récupère la donnée lat qui correspond à la latitude en cherchant dans la branche coord des données récupérèes
    const { lat } = data.coord;
    //On récupère la donnée lon qui correspond à la longitude en cherchant dans la branche coord des données récupérèes
    const { lon } = data.coord;

    return (
      //On appel le composant AstroAPI avec en paramètre les données que nous avons récupérées à l'aide de cette API
      <div className="margtop">
        <h3>Lattitude de la ville :</h3><h4>{lat}</h4><h3>Longitude :</h3><h4>{lon}</h4>
        <AstroAPI lat={lat} lon={lon} />
      </div>
    )
  }
}

export default Latetlongforastronomie;