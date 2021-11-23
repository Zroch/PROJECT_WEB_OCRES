import Aside from '../composants/Aside';
import Settings from '../composants/Settings';
import React from "react";

function Reglages() {
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

export default Reglages;