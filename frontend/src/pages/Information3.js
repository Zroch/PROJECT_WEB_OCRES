import Aside from '../composants/Aside';
import React from 'react';
import Info3 from '../composants/Info3';

function Information3 () {

 

  return (
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