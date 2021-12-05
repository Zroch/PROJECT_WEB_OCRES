import React, { Component } from "react";
import axios from "axios";
import '../styles/Apis.css';

class Print extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //liste: null
            city: null, 
            name: null,
            adresse: null,
            horaire: null,
            price: 0,
        };
    }

    

    componentDidMount() {
        axios
            //On fait une demande au back end ouvert sur le port 3000
            .get("http://localhost:3000/api/ports")
            .then(({ data }) => {
                console.log(data);
                // Recupere uniquement la propriété data

                const { ports } = data;
                console.log(ports);
                const liste = [ports[0], ports[1]];
                console.log(liste);
                this.setState({ liste });
            })
            .catch(console.error);
    };

    putDataToDBZ = (city, name, adresse, horaire, price) => {
      axios.post("http://localhost:3000/api/ports", { 
          name: name,
          city: city,
          adresse: adresse,
          horaire: horaire,
          price: price
        });
      };

    render() {
        //On appelle les données récupérées
        const { liste } = this.state;
        if (!liste) return <p>Loading...</p>;
        return (

            <div className="center">

                <ul>
                    {liste.map(item => (
                        <li key={item._id}>
                            <h3 className="margtop">Ville : {item.city}</h3>
                            <p><h5>Nom :</h5> {item.name}</p>
                            <p><h5>id : </h5> {item._id}</p>
                            <p><h5>Adresse :</h5> {item.adresse}</p>
                            <p><h5>Horaires :</h5> {item.horaire}</p>
                            <p><h5>Prix par nuit :</h5> {item.price}</p>
                        </li>
                    ))}
                </ul>

            </div>




        );
    }
}
export default Print;





