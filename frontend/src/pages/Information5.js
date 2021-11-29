//Les imports
import Aside from '../composants/Aside';
import React from 'react';
import Info5 from '../composants/Info5';

//Page appelant les composants permettants d'afficher l'information 5 (astronomie)
function Information5 () {
  return (
    //Aside affiche le menu
    //Info appel le composant contenant l'information 5 (astronomie)
    <div class="container">
    <div class = "row">
      <div class="col-3">
        <Aside />
      </div>
      <div class="col-9">
        <Info5 />
      </div>
    </div>
    </div>
  );
}

export default Information5;