import Aside from '../composants/Aside';
import React from 'react';
import Settings from '../composants/Settings';

function Home () {

  return (
    <div class="container">
    <div class = "row">
      <div class="col-3">
        <Aside />
      </div>
      <div class="col-9">
        <Settings />
      </div>
    </div>
    </div>
  );
}

export default Home;