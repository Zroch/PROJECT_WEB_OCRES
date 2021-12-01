const { Router } = require('express');
const express = require('express');
const router = express.Router();
const PortCtrl = require('../controllers/portcontroller');
//la route permet d'appeler la bonne logique de controle.

//route appellant les controleurs.
router.post('/', PortCtrl.createPort);
router.get('/:id', PortCtrl.getOnePort);
router.get('/', PortCtrl.getAllPorts);
router.put('/:id', PortCtrl.updateOnePort);
router.delete('/:id', PortCtrl.deleteOnePort);


module.exports = router;
