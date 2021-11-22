import '../styles/Home.css';
import Aside from '../composants/Aside';
import Main from '../composants/Main';


function Home () {

 

  return (
    <div class="container">
    <div class = "row">
      <div class="col-3">
        <Aside />
      </div>
      <div class="col-9">
        <Main />
      </div>
    </div>
    </div>
  );
}

export default Home;