import Aside from '../composants/Aside';
import React from 'react';
import Info1 from '../composants/Info1';

function Information1 () {

 

  return (
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