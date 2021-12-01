//Les imports
import React, { Component } from "react";
import TidesAPI from "../js/tidesAPI";
import "../styles/Apis.css";

class Latetlong extends Component {
  render() {
    const { data } = this.props;
    //console.log("data", data);
    if (!data) return null;
    //On récupère la donnée lat qui correspond à la latitude en cherchant dans la branche coord des données récupérèes  
    const { lat } = data.coord;
    //On récupère la donnée lon qui correspond à la longitude en cherchant dans la branche coord des données récupérèes
    const { lon } = data.coord;

    return (
      //On appel le composant TidesAPI avec en paramètre les données que nous avons récupérées à l'aide de cette API
      <div className="margtop">
        <h3>Lattitude de la ville :</h3><h4>{lat}</h4><h3>Longitude :</h3><h4>{lon}</h4>
        <TidesAPI lat={lat} lon={lon} />
      </div>
    )
  }
}

export default Latetlong;