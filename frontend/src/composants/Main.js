import '../styles/Main.css';
import React from "react";

//Constantes
const allinfo = [
    {
        donnee : "donnee1",
        info : "plusinfo1",
    },
    {
        donnee : "donnee2",
        info : "plusinfo2",
    },
    {
        donnee : "donnee3",
        info : "plusinfo3",
    },
    {
        donnee : "donnee4",
        info : "plusinfo4",
    },
];

//Boutons 
function Infoebutton(props){
    return(
      <button className="butts"  onClick={props.onclick} >{props.name} </button>
    )
  }
  
//Class qui gère les données affichées
  class Profile extends React.Component {
  
    render(){
      return(
        <div>
        <div>
            <div>
                <p>Donnée: {this.props.donnee}</p>
            </div>
            <div>
                <p>Info: {this.props.info}</p>
            </div>
          </div>
        </div>
  
      )
    }
  }

//Affichage de la page
class Main extends React.Component {
    constructor(props){
        super(props);
        //La donnée affichée est la première par défault
        this.state = {
          activeprofile: 0
        }
        this.handleclick = this.handleclick.bind(this);
      } 
      //Effet du click du boutton
      handleclick(index){
        console.log(index)
        this.setState({activeprofile:index})
      }

    //Affichage de la page
    render(){
        return (
            <div class="container">
            
                <div class="row">
                    <h1 className="font">Overview</h1>   
                </div>

                <div class="row">
                    <div className="top">
                    {allinfo.map((profil,index)=>
                    <Infoebutton onclick={()=>this.handleclick(index)} name={profil.donnee} key={index}></Infoebutton>)}
                    </div> 
                </div>

                <div class ="row">
                    <div className="mid">
                        <article>
                        <Profile donnee={allinfo[this.state.activeprofile].donnee} 
                        info={allinfo[this.state.activeprofile].info}>
                        </Profile>
                        </article>
                    </div>
                </div>

                <div class = "row">
                    <div className="bot">
                    </div>
                </div>
        
        </div>
    );
}
}

export default Main;