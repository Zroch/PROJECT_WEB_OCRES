//Importations
import React from 'react';
import './styles/App.css';
import {Routes,  Route } from 'react-router-dom';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Plusinfos from './pages/Plusinfos';
import Reglages from './pages/Réglages';
import Information1 from './pages/Information1';
import Information2 from './pages/Information2';
import Information3 from './pages/Information3';
import Information4 from './pages/Information4';
import Information5 from './pages/Information5';

//Fonction principale qui gère toutes les pages
function App() {
  return (
    //La route par défault ouvre la page Home
    //Lorsque l'url saisie est invalide la page renvoie sur la page Notfound
      <Routes>
        <Route exact path ="/" element={<Home />}/>
        <Route exact path="plusinfo" element={<Plusinfos />}/>
        <Route exact path="reglages" element={<Reglages />}/>
        <Route exact path="meteo" element={<Information1 />}/>
        <Route exact path="visibilite" element={<Information2 />}/>
        <Route exact path="vent" element={<Information3 />}/>
        <Route exact path="maree" element={<Information4 />}/>
        <Route exact path="astronomie" element={<Information5 />}/>
        <Route path="*" element={<Notfound />}/>
      </Routes>
  );
};

export default App;
