//Les imports
import React, { Component } from "react";
import axios from "axios";
import "../styles/Apis.css";

//API récupérant les informations astrologiques d'une ville
//On récupère la date de levé et de couché du soleil 

//Les constantes contenants l'url de l'api et la key
//API d'information sur la météo maritime
const API_URL = "http://api.worldweatheronline.com/premium/v1/marine.ashx";
const API_KEY = "042cf1d1dadc48ecabb163106212711";

class TidesAPI extends Component {
  //On intialise les données
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      date : null
    };
  }

  //On créer la fonction CallAPI récupérant les données d'une API et pouvant être réutilisée à tout moment
  //La fonction est appelée avec deux paramètres lat et lon pour latitude et longitude

  callAPI = (lat,lon) => {
    axios

      //On fait une demande à l'url saisie
      .get(`${API_URL}?key=${API_KEY}&format=json&q=${lat},${lon}&tide=yes`)
      //Les données sous le format json sont récupérées dans data

      .then(({ data }) => {
       //console.log(data)
        // Recupere uniquement la propriété data

        //En parcourant l'arborescence du fichier json on récupère l'heure du levée et l'heure du couché du soleil
        this.setState({ leve: data.data.weather[0].astronomy[0].sunrise, couche: data.data.weather[0].astronomy[0].sunset});
      })
      .catch(console.error);
  };

  // Lance un appel au lancement du component
  componentDidMount() {
    const { lat, lon } = this.props;
    this.callAPI(lat,lon);
  }

  // A chaque update relance une api
  componentDidUpdate(nextProps) {
    // Ici on verifie que la mise à jour concerne bien les champs lat et lon
    if (nextProps.lat || nextProps.lon !== this.props.lat || this.props.lon) {
      this.callAPI(nextProps.lat, nextProps.lon);
    }
  }

  render() {
    //On appelle les données récupérées 
    const { leve, couche } = this.state;
    //console.log(leve)
    //Affiche que les données chargent
    if (!leve) return <p>Loading...</p>;
    return (
      //Affichage des données
      <div className="margtop">
         <h4>Le soleil se lève à </h4>{leve}<h4>et se couche a </h4>{couche}
        </div>
      
    );
  }
}


export default TidesAPI;