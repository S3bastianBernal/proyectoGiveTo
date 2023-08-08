const router = require('express').Router();

const { signup, bienvenida } = require('../controllers/appController.js')


/** HTTP Reqeust */
router.post('/user/signup', signup);
router.post('/product/getbill', bienvenida);


module.exports = router;