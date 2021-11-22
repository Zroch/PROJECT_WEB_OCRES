//Importations
//Installer react-router-dom en faisant npm install -S react-router

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './js/reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);







reportWebVitals();
