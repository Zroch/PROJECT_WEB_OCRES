//imports
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const RoutePorts = require('./router/port');
const cors = require('cors');

//connection à la base de données cloud mongodb
mongoose.connect('mongodb+srv://server:eceweb@cluster0.qrgtx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  app.use(cors());
//utilisation de bodyParser pour analyser les données codée en JSON lors des requêtes soumises
app.use(bodyParser.json());
//appels des routes dans le dossier router
app.use('/api/ports/', RoutePorts);



//exportation du l'application pour un lancement dans le ficher server.
module.exports = app;
