//imports
const { Router } = require('express');
const express = require('express');
const router = express.Router();
const PortCtrl = require('../controllers/portcontroller');
//la route permet d'appeler la bonne logique de controle.

//appels des différents controleurs.
router.post('/add', PortCtrl.createPort); //create
router.get('/:id', PortCtrl.getOnePort); // get one
router.get('/', PortCtrl.getAllPorts); //get all
router.put('/:id', PortCtrl.updateOnePort); //update one
router.delete('/:id', PortCtrl.deleteOnePort); //delete one

//exportation des routes
module.exports = router;