import Aside from '../composants/Aside';
import React from 'react';
import Info5 from '../composants/Info5';

function Information5 () {

 

  return (
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