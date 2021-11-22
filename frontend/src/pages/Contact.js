import '../styles/Home.css';
import Aside from '../composants/Aside';
import ContactForm from '../composants/ContactForm';

function App() {
  return (
    <div class="container">
    <div class = "row">
      <div class="col-3">
        <Aside />
      </div>
      <div class="col-9">
        <ContactForm />
      </div>
    </div>
    </div>
  );
}

export default App;