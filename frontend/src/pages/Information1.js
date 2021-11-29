//Les imports
import Aside from '../composants/Aside';
import React from 'react';
import Info1 from '../composants/Info1';

//Page appelant les composants permettants d'afficher l'information 1
function Information1 () {

 

  return (
    //Aside affiche le menu
    //Info appel le composant contenant l'information 1
    <div class="container">
    <div class = "row">
      <div class="col-3">
        <Aside />
      </div>
      <div class="col-9">
        <Info1 />
      </div>
    </div>
    </div>
  );
}

export default Information1;