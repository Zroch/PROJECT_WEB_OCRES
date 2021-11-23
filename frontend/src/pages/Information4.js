import Aside from '../composants/Aside';
import React from 'react';
import Info4 from '../composants/Info4';

function Information4 () {

 

  return (
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