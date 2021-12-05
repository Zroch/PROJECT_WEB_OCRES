import React, { Component } from 'react'
import axios from "axios";


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
          id:0,
          city: null,
          name: null,
          adresse: null,
          horaire: null,
          price: 0,
        };
    }

    postData = (city, name, adresse, horaire, price) => {
      axios.post("http://localhost:3000/api/ports", { 
          name: name,
          city: city,
          adresse: adresse,
          horaire: horaire,
          price: price
        });
      };
      
      deleteData = id => {
        console.log(id);
        axios.delete(`http://localhost:3000/api/ports/${id}`)
        .then(response => {
          console.log(response);
        
      });
    };

    render () {
        const { data } = this.state;
        return (
          <div className = "form">
            <div className = "post">
              <h2>Ajouter un port</h2>
              <br></br>
                  <label for="inputcity">Ville</label>
                  <input type="text" onChange={e => this.setState({ city: e.target.value })} class="form-control" id="inputcity"/>
                       
                  <label for="inputName">Nom du port</label>
                  <input type="text"  onChange={e => this.setState({ name: e.target.value })} class="form-control" id="inputName"/>
                       
                  <label for="inputAdresse">Adresse</label>
                  <input type="text" onChange={e => this.setState({ adresse: e.target.value })} class="form-control" id="inputAdresse"/>
                      
                  <label for="inputHoraires">Horaires</label>
                  <input type="text" onChange={e => this.setState({ horaire: e.target.value })} class="form-control" id="inputHoraires"/>
                       
                  <label for="inputPrice">Prix</label>
                  <input type="text" onChange={e => this.setState({ price: e.target.value })} class="form-control" id="inputPrice"/>                      
                      
                  <button className="btnpost" onClick={() => this.postData(this.state.city, this.state.name, this.state.adresse, this.state.horaire, this.state.price)}>Ajouter</button> 
              </div> 
              <br/>
              <div className = "delete">
                <h2>Supprimer un port</h2>
                <label for="id">ID</label>
                <input type="text" onChange={e => this.setState({ id: e.target.value })} class="form-control" id="inputid"/>

                <button className="btndelete" onClick={() => this.deleteData(this.state.id)}>Supprimer</button> 
              </div>

                 
            </div>

            

          
          
        )
      }

}
export default Form;