import React from 'react';
import city from '../composants/Settings';
//on récupre dans settings le nom de la ville dans la donnée city
//il faut maintenant pourvoir faire un fetch("https://goweather.herokuapp.com/weather/lenomdelaville")
//Bon courage

const API_URL = "https://goweather.herokuapp.com/weather"

class Apitest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch(`${API_URL}/&${city}`)
      
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result["temperature"]
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
           {items} Celcus
          </ul>
        );
      }
    }
  }

  export default Apitest; 