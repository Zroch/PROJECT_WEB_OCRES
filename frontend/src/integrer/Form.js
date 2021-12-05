import React, { Component } from 'react'
import axios from "axios";
import Print from './Print';


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
    componentDidMount() {
      this.getDataFromDb();
      if (!this.state.intervalIsSet) {
        let interval = setInterval(this.getDataFromDb, 1000);
        this.setState({ intervalIsSet: interval });
      }
    }
  
    componentWillUnmount() {
      if (this.state.intervalIsSet) {
        clearInterval(this.state.intervalIsSet);
        this.setState({ intervalIsSet: null });
      }
    }
  
    //afficher un type
    getDataFromDb = () => {
      fetch("http://localhost:3000/api/ports")
        .then(data => data.json())
        .then(res => this.setState({ data: res.data }));
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

    render () {
        const { data } = this.state;
        return (
          <div>
              <h2>Ajouter un port</h2>
              <br></br>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-12'>
             
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputcity">city</label>
                          <input type="text" onChange={e => this.setState({ city: e.target.value })} class="form-control" id="inputcity"/>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="inputName">Name</label>
                          <input type="text"  onChange={e => this.setState({ name: e.target.value })} class="form-control" id="inputName"/>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputAdresse">Adresse</label>
                          <input type="text" onChange={e => this.setState({ adresse: e.target.value })} class="form-control" id="inputAdresse"/>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputHoraires">Horaires</label>
                          <input type="text" onChange={e => this.setState({ horaire: e.target.value })} class="form-control" id="inputHoraires"/>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputPrice">Price</label>
                          <input type="text" onChange={e => this.setState({ price: e.target.value })} class="form-control" id="inputPrice"/>
                        </div>
                      </div>
                      
                      <button className="btn btn-success" onClick={() => this.putDataToDBZ(this.state.city, this.state.name, this.state.adresse, this.state.horaire, this.state.price)}>
                        Ajouter
                      </button>
                 
                  </div> 
                            
                </div>    
              </div>
              <br/>

             
             
              
              
        </div>
        )
      }

}
export default Form;