//Importations
import './styles/App.css';
import {Routes,  Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';
import Plusinfos from './pages/Plusinfos';

//Fonction principale qui gère toutes les pages
function App() {
  return (
    //La route par défault ouvre la page Home
    //Lorsque l'url saisie est invalide la page renvoie sur la page Notfound
      <Routes>
        <Route exact path ="/" element={<Home />}/>
        <Route exact path="contact" element={<Contact />}/>
        <Route exact path="plusinfo" element={<Plusinfos />}/>
        <Route path="*" element={<Notfound />}/>
      </Routes>
  );
};

export default App;
