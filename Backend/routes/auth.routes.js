const {Router} = require('express');
const {check} = require('express-validator');

const { validateDocuments } = require('../middlewares/validate.documents');
const { login } = require('../controllers/auth.controller');

const router = Router();

router.post('/login',[
    check('correo', 'El email es obligatorio').isEmail(),
    check('contraseña', 'El password es obligatorio').not().isEmpty(),
    validateDocuments
],login)


module.exports = router;