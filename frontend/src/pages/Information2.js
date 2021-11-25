import Aside from '../composants/Aside';
import React from 'react';
import Info2 from '../composants/Info2';

function Information2 () {

 

  return (
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