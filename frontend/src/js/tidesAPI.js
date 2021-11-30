//Les imports
import React, { Component } from "react";
import axios from "axios";
import "../styles/Apis.css";
import Chart from "../composants/Chart";
//API récupérant les informations de la marèe d'une ville
//On récupère la hauteur de la marée à une heure relevée par l'API 

//Les constantes contenants l'url de l'api et la key
//API d'information sur la météo maritime
const API_URL = "http://api.worldweatheronline.com/premium/v1/marine.ashx";
const API_KEY = "042cf1d1dadc48ecabb163106212711";

class TidesAPI extends Component {
  //On initialise les données
  constructor(props) {
    super(props);
    this.state = {
      items1:null,items2:null,items3: null,
      date1: null,date2:null,date3: null
    };
  }

  //On créer la fonction CallAPI récupérant les données d'une API et pouvant être réutilisée à tout moment
  //La fonction est appelée avec deux paramètres lat et lon pour latitude et longitude

  callAPI = (lat, lon) => {
    axios
      //On fait une demande à l'url saisie
      .get(`${API_URL}?key=${API_KEY}&format=json&q=${lat},${lon}&tide=yes`)
      //Les données sous le format json sont récupérées dans data
      .then(({ data }) => {
        console.log(data)
        // Recupere uniquement la propriété data

        //En parcourant l'arborescence du fichier json on récupère la hauteur de la marée et l'heure du relevé effectué par les scientifiques
        this.setState({ items1: data.data.weather[0].tides[0].tide_data[0].tideHeight_mt, date1: data.data.weather[0].tides[0].tide_data[0].tideDateTime, items2: data.data.weather[0].tides[0].tide_data[1].tideHeight_mt, date2: data.data.weather[0].tides[0].tide_data[1].tideDateTime, items3: data.data.weather[0].tides[0].tide_data[2].tideHeight_mt, date3: data.data.weather[0].tides[0].tide_data[2].tideDateTime });
      })
      .catch(console.error);
  };

  // Lance un appel au lancement du component
  componentDidMount() {
    const { lat, lon } = this.props;
    this.callAPI(lat, lon);
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
    const { items1, date1, items2, date2, items3, date3 } = this.state;
    console.log(items1)
    //Affiche que les données chargent
    if (!items1) return <p>Loading...</p>;
    return (
      //Affichage des données
      <div>
        <Chart date1={date1} items1={items1} date2={date2}  items2={items2} date3={date3}  items3={items3} />
        <h4>A {date1}, la hauteur de la marée est de : </h4><h1>{items1} mètres</h1>
        <h4>A {date2}, la hauteur de la marée est de : </h4><h1>{items2} mètres</h1>
        <h4>A {date3}, la hauteur de la marée est de : </h4><h1>{items3} mètres</h1>
      </div>

    );
  }
}


export default TidesAPI;
