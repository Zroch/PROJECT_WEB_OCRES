//Les imports
import React, { Component } from "react";
import axios from "axios";
import Latetlonforastronomie from "../composants/Latetlonforastronomie";
import "../styles/Apis.css"

//API récupérant les informations astrologiques d'une ville
//On récupère la date de levé et de couché du soleil 

//Les constantes contenants l'url de l'api et la key
//API d'information sur la météo 
const API_URL = "http://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "768a35a09a1701be84498950a95e7cf5";

class AstronomieAPI extends Component {
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
      .then(({ data }) => {
        //console.log(data);
        // Recupere uniquement la propriété data

        //Dans la data on récupère le nom de la ville
        const { city } = data;
        // console.log(city);
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
    if (!city) return <p>Loading...</p>;
    return (
      //On appelle le composant Latetlonforastronomie avec pour paramètre les données récupérées par l'API
      <div className="center">

        <h2>{city1}</h2>

        <Latetlonforastronomie data={city} />



      </div>
    );
  }
}

export default AstronomieAPI;