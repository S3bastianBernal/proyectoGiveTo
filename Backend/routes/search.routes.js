const { Router } = require('express');
const { search } = require('../controllers/search.controller.js');

const router = Router();


router.get('/:coleccion/:criterio', search )




module.exports = router;