import React, { Component } from "react";
import axios from "axios";
import '../styles/Apis.css';

class Print extends Component {

    constructor(props) {
        super(props);
        this.state = {
            liste: null
        };
    }

    

    componentDidMount() {
        axios
            //On fait une demande au back end ouvert sur le port 3000
            .get("http://localhost:3000/ports")
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

    render() {
        //On appelle les données récupérées
        const { liste } = this.state;
        if (!liste) return <p>Loading...</p>;
        return (

            <div className="center">

                <ul>
                    {liste.map(item => (
                        <li key={item._id}>
                            {item.city}{item.name}{item.adress}{item.horaire}{item.price}
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}



export default Print;