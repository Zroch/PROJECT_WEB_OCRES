//Les imports
import React, { Component } from "react";
import axios from "axios";
import Day from "../composants/Day";
import '../styles/Apis.css';


//API récupérant les informations météoroligques d'une ville

//Les constantes contenants l'url de l'api et la key
//API d'information sur la météo 
const API_URL = "http://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "768a35a09a1701be84498950a95e7cf5";

class Forecast extends Component {
  //On initialise les variables
  constructor(props) {
    super(props);
    this.state = {
      forecast: null,
    };
  }

  //On créer la fonction CallAPI récupérant les données d'une API et pouvant être réutilisée à tout moment
  //La fonction est appelée avec un paramètre city
  callAPI = city => {
    axios
      //On fait une demande à l'url saisie
      .get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      .then(({ data }) => {
        //Les données sous le format json sont récupérées dans data
        //console.log(data);
        // Recupere uniquement la propriété data
        const { list } = data;
        // On prend les trois premières heures de chaque jour (donc de 0-3h))
        const forecast = [list[0], list[9]];

        this.setState({ forecast });
      })
      .catch(console.error);
  };

  // Lance un appel au lancement du component
  componentDidMount() {
    const { city } = this.props;
    this.callAPI(city);
  }

  // A chaque update relance une api
  componentDidUpdate(nextProps) {
    // Ici on verifie que la mise à jour concerne bien le champs city
    if (nextProps.city !== this.props.city) {
      this.callAPI(nextProps.city);
    }
  }

  render() {
    //On appelle les données récupérées 
    const { forecast } = this.state;
    const { city } = this.props;
    //Affiche que les données chargent
    if (!forecast) return <p>Loading...</p>;
    return (
      //Affiche les données
      <div className="center">
        <h2>{city}</h2>
        <div>
          {/* render tout le tableau */}
          {forecast.map((forecastData, index) => {
            return <Day key={index} data={forecastData} />;
          })}
        </div>
      </div>
    );
  }
}

export default Forecast;
