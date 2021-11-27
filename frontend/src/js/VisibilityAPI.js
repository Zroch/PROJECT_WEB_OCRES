import React, { Component } from "react";
import axios from "axios";
import Visibilty from "../composants/Visibility";
import "../styles/Apis.css";

const API_URL = "http://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "768a35a09a1701be84498950a95e7cf5";

class VisibilityAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: null
    };
  }

  callAPI = city => {
    // Call API
    axios
      .get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
      .then(({ data }) => {
        console.log(data);
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
    const { forecast } = this.state;
    const { city } = this.props;
    if (!forecast) return <p>Loading...</p>;
    return (
      <div className="center">
        <h2>{city}</h2>
        <div>
        
          {forecast.map((forecastData, index) => {
            return <Visibilty key={index} data={forecastData} />;
          })}
          
        </div>
      </div>
    );
  }
}

export default VisibilityAPI;
