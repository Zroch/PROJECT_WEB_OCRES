import '../styles/Home.css';
import Aside from '../composants/Aside';
import Info1 from '../composants/Info1';
import React from 'react';

function Home () {

 

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

export default Home;