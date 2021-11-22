import '../styles/Home.css';
import Aside from '../composants/Aside';
import Error from '../composants/Error';

function Notfound() {
  return (
    <div class="container">
    <div class = "row">
      <div class="col-3">
        <Aside />
      </div>
      <div class="col-9">
        <Error />
      </div>
    </div>
    </div>
  );
}

export default Notfound;