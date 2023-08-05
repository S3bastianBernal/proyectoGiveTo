const router = require('express').Router();

const { signup, getbill } = require('../controllers/appController.js')


/** HTTP Reqeust */
router.post('/user/signup', signup);
router.post('/product/getbill', getbill);


module.exports = router;