const {Router} = require('express');
const { getDecoracion } = require('../controllers/decoracion.controller');
const { getDulces } = require('../controllers/dulces.controller');
const { getObjectos } = require('../controllers/objectos.controller');


const router = Router();


router.get('/decoracion',getDecoracion);
router.get('/dulces',getDulces);
router.get('/objectos',getObjectos);

module.exports = router