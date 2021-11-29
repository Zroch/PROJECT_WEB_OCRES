//Formulaire de contact non fonctionel 
import React from 'react';
import Aside from '../composants/Aside';
import '../styles/Main.css';


function PlusInfo() {
    return (

      <div class="container">
    <div class = "row">
      <div class="col-3">
        <Aside />
      </div>
      <div class="col-9">
        <div className="mid">
          <div className="info">
          <h2>FrontEnd :</h2>
            Notre site web NAVTODAY à pour but de fournir aux utilisateurs des informations sur les conditions de navigation actuelle aux environs d'une ville.
            Ses informations sont facilement disponible sur internet, mais aucun service ne les proposent sur une seule et même platforme.
            Pour changer de ville il suffit d'aller dans la section réglage.
            Vous pouvez alors retrouver :
            <div className="liste">
            <li>La météo</li>
            <li>La visibilité</li>
            <li>Le vent</li>
            <li>Les marées</li>
            <li>L'astronomie</li>
            <li>Les informations sur le port le plus proche</li>
            </div>
            <h2>BackEnd :</h2>
            Par la suite les utilisateurs pourront alors rentrer les informations sur la capitainerie d'un port associé à une ville.
            <div className="liste">
            <li>Nom du port</li>
            <li>Nombre de places visiteurs</li>
            <li>Horaires</li>
            <li>Prix</li>
            <li>Présence de portes ou non</li>
            </div>

            <h3>Auteurs :</h3>
            Lucas LESCOT & Alexis YOUF
           </div>
        </div>
      </div>
    </div>
    </div>
    );
  }
  
  export default PlusInfo;