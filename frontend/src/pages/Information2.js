//Les imports
import Aside from '../composants/Aside';
import React from 'react';
import Info2 from '../composants/Info2';

//Page appelant les composants permettants d'afficher l'information 2 (visibilité)
function Information2 () {
  return (
    //Aside affiche le menu
    //Info appel le composant contenant l'information 2 (visibilité)
    <div class="container">
    <div class = "row">
      <div class="col-3">
        <Aside />
      </div>
      <div class="col-9">
        <Info2 />
      </div>
    </div>
    </div>
  );
}

export default Information2;