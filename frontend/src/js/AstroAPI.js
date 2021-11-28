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
    // Ici on verifie que la mise à jour concerne bien le champs city
    if (nextProps.lat || nextProps.lon !== this.props.lat || this.props.lon) {
      this.callAPI(nextProps.lat, nextProps.lon);
    }
  }

  render() {
    const { leve, couche } = this.state;
    console.log(leve)
    if (!leve) return <p>Loading...</p>;
    return (
      <div className="margtop">
         <h4>Le soleil se lève à </h4>{leve}<h4>et se couche a </h4>{couche}
        </div>
      
    );
  }
}


export default TidesAPI;