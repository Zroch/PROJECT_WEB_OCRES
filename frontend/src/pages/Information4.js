//Les imports
import Aside from '../composants/Aside';
import React from 'react';
import Info4 from '../composants/Info4';

//Page appelant les composants permettants d'afficher l'information 4 (marée)
function Information4 () {

  return (
    //Aside affiche le menu
    //Info appel le composant contenant l'information 4 (marée)
    <div class="container">
    <div class = "row">
      <div class="col-3">
        <Aside />
      </div>
      <div class="col-9">
        <Info4 />
      </div>
    </div>
    </div>
  );
}

export default Information4;