const express = require('express')
const controller = require('../controllers/controller')

const router = express.Router()

router.post('/incluirpartida', controller.incluir);
router.get('/mostrarpartidas', controller.mostrar);
router.get('/mostrargrupo', controller.mostrargrupo);
router.get('/mostrarjogo', controller.mostrarjogo);
router.get('/mostrardata', controller.mostrardata);

module.exports = router