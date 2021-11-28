import React, { Component } from "react";
import axios from "axios";
import "../styles/Apis.css";


//http://api.worldweatheronline.com/premium/v1/marine.ashx?key=042cf1d1dadc48ecabb163106212711&format=json&q=45%2C-2&tide=yes
const API_URL = "http://api.worldweatheronline.com/premium/v1/marine.ashx";
const API_KEY = "042cf1d1dadc48ecabb163106212711";

class TidesAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      date : null
    };
  }

  callAPI = (lat,lon) => {
    // Call API
    axios
      .get(`${API_URL}?key=${API_KEY}&format=json&q=${lat},${lon}&tide=yes`)
      .then(({ data }) => {
       console.log(data)
        // Recupere uniquement la propriété data
       
        // On prend les trois premières heures de chaque jour (donc de 0-3h))
       

        this.setState({ items1: data.data.weather[0].tides[0].tide_data[0].tideHeight_mt, date1 : data.data.weather[0].tides[0].tide_data[0].tideDateTime, items2: data.data.weather[0].tides[0].tide_data[1].tideHeight_mt, date2 : data.data.weather[0].tides[0].tide_data[1].tideDateTime, items3: data.data.weather[0].tides[0].tide_data[2].tideHeight_mt, date3 : data.data.weather[0].tides[0].tide_data[2].tideDateTime, items4: data.data.weather[0].tides[0].tide_data[3].tideHeight_mt, date4 : data.data.weather[0].tides[0].tide_data[3].tideDateTime });
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
    // Ici on verifie que la mise à jour concerne bien le champs city
    if (nextProps.lat || nextProps.lon !== this.props.lat || this.props.lon) {
      this.callAPI(nextProps.lat, nextProps.lon);
    }
  }

  render() {
    const { items1, date1, items2, date2, items3, date3, items4, date4 } = this.state;
    console.log(items1)
    if (!items1) return <p>Loading...</p>;
    return (
      <div className="extension">
         <h4>A {date1}, la hauteur de la marée est de : </h4><h1>{items1} mètres</h1>
         <h4>A {date2}, la hauteur de la marée est de : </h4><h1>{items2} mètres</h1>
         <h4>A {date3}, la hauteur de la marée est de : </h4><h1>{items3} mètres</h1>
         <h4>A {date4}, la hauteur de la marée est de : </h4><h1>{items4} mètres</h1>
        </div>
      
    );
  }
}


export default TidesAPI;
