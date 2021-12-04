//imports
const http = require('http');
const app = require('./app');

//lancement du serveur app à l'adresse localhost.
const server = http.createServer(app);

//utilisation du port 3000 par le serveur.
server.listen(3000, () => {
    console.log("server is running at localhost:3000");
});