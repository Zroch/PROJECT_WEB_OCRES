//Les imports
import Aside from '../composants/Aside';
import React from 'react';
import Info3 from '../composants/Info3';

//Page appelant les composants permettants d'afficher l'information 3 (vent)
function Information3 () {
  return (
    //Aside affiche le menu
    //Info appel le composant contenant l'information 3 (vent)
    <div class="container">
    <div class = "row">
      <div class="col-3">
        <Aside />
      </div>
      <div class="col-9">
        <Info3 />
      </div>
    </div>
    </div>
  );
}

export default Information3;