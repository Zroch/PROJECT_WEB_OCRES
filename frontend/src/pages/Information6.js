//Les imports
import Aside from '../composants/Aside';
import React from 'react';
import Info6 from '../composants/Info6';

//Page appelant les composants permettants d'afficher l'information 1 (meteo)
function Information6 () {
  return (
    //Aside affiche le menu
    //Info appel le composant contenant l'information 1 (météo)
    <div class="container">
    <div class = "row">
      <div class="col-3">
        <Aside />
      </div>
      <div class="col-9">
        <Info6 />
      </div>
    </div>
    </div>
  );
}

export default Information6;