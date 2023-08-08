const {Router} = require('express');
const {check} = require('express-validator');

const { validateDocuments } = require('../middlewares/validate.documents.js');
const { validateJWT } = require('../middlewares/validate.jwt.js');
const { getRegalos, postRegalos, deleteRegalo, putRegalo } = require('../controllers/regalos.controller.js');
const { isAdminRole } = require('../middlewares/validate.role.js');

const router = Router();

router.get('/',getRegalos);

router.post('/',[
    validateJWT,
    check('correo', 'No un correo valido').isEmail(),
    validateDocuments
],postRegalos);

router.delete('/:id',[
    validateJWT,
    check('id', 'No es un ObjectID Mongo Valido').isMongoId(),
    validateDocuments
],deleteRegalo);

router.put('/:id',[
    check('id', 'No es un ObjectID Mongo Valido').isMongoId(),
    validateDocuments
],putRegalo);


module.exports = router;