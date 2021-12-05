import React, { Component } from "react";
import axios from "axios";
import '../styles/Apis.css';

class Print extends Component {

    constructor(props) {
        super(props);
        this.state = {
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

                //On selectionne le tableau contenant chaque port
                const { ports } = data;
               
                this.setState({ ports });
            })
            .catch(console.error);
    };


    render() {
        //On appelle les données récupérées
        const { ports } = this.state;
        if (!ports) return <p>Loading...</p>;
        return (

            <div className="center">

                <ul>
                    {ports.map(item => (
                        <li className="sans" key={item._id}>
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





