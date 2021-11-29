import React, { Component } from "react";
import axios from "axios";
import Latetlong from "../composants/Latetlong";
import "../styles/Apis.css"

//API récupérant les coordonnées géographiques d'une ville
//On récupère les informations de la ville

//Les constantes contenants l'url de l'api et la key
//API d'information sur la météo 
const API_URL = "http://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "768a35a09a1701be84498950a95e7cf5";

class LatetlongAPI extends Component {
  //On initialise les variables
  constructor(props) {
    super(props);
    this.state = {
      city: null
    };
  }

  //On créer la fonction CallAPI récupérant les données d'une API et pouvant être réutilisée à tout moment
  //La fonction est appelée avec un paramètre city1

  callAPI = city1 => {
    axios
      //On fait une demande à l'url saisie
      .get(`${API_URL}?q=${city1}&appid=${API_KEY}&units=metric`)
      //Les données sous le format json sont récupérées dans data

      .then(({ data }) => {
        //console.log(data);
        // Recupere uniquement la propriété data
        //De data on récupère les informations de la ville en paramètre
        const { city } = data;
        //console.log(city);

        this.setState({ city });
      })
      .catch(console.error);
  };

  // Lance un appel au lancement du component
  componentDidMount() {
    const { city1 } = this.props;
    this.callAPI(city1);
  }

  // A chaque update relance une api
  componentDidUpdate(nextProps) {
    // Ici on verifie que la mise à jour concerne bien le champs city1
    if (nextProps.city1 !== this.props.city1) {
      this.callAPI(nextProps.city1);
    }
  }

  render() {
    //On appelle les données récupérées 
    const { city } = this.state;
    const { city1 } = this.props;
    //Affiche que les données chargent
    if (!city) return <p>Loading...</p>;
    return (
      //On appelle le composant Latetlong avec pour paramètre les données récupérées par l'API

      <div className="center">

        <h2>{city1}</h2>

        <Latetlong data={city} />
      </div>
    );
  }
}

export default LatetlongAPI;
