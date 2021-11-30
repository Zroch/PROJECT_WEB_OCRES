const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const RoutePorts = require('./router/port');


mongoose.connect('mongodb+srv://server:eceweb@cluster0.qrgtx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(bodyParser.json());
app.use('/api/ports/', RoutePorts);




module.exports = app;
