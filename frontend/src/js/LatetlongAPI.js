import React, { Component } from "react";
import axios from "axios";
import Latetlong from "../../components/Latetlong";


const API_URL = "http://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "768a35a09a1701be84498950a95e7cf5";

class LatetlongAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null
    };
  }

  callAPI = city1 => {
    // Call API
    axios
      .get(`${API_URL}?q=${city1}&appid=${API_KEY}&units=metric`)
      .then(({ data }) => {
        //console.log(data);
        // Recupere uniquement la propriété data
        const { city } = data;
        // On prend les trois premières heures de chaque jour (donc de 0-3h))
      console.log(city);

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
    // Ici on verifie que la mise à jour concerne bien le champs city
    if (nextProps.city1 !== this.props.city1) {
      this.callAPI(nextProps.city1);
    }
  }

  render() {
    const {city} = this.state;
    const { city1 } = this.props;
    if (!city) return <p>Loading...</p>;
    return (
      <div>
        
        <h2>{city1}</h2>
       
          
          yo
          <Latetlong data={city}/>
     
          
       
      </div>
    );
  }
}

export default LatetlongAPI;
