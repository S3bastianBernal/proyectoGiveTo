const {Router} = require('express');
const {check} = require('express-validator');

const { validateDocuments } = require('../middlewares/validate.documents.js');
const { validateJWT } = require('../middlewares/validate.jwt.js');
const { isAdminRole } = require('../middlewares/validate.role.js');


const { emailExiste,userExistsById } = require('../helpers/db.validators.js');

const {getUsers,postUser,putUser,deleteUser} = require('../controllers/usuarios.controller.js');
const { getbill } = require('../controllers/appController.js');

const router = Router();

router.get("/all", getUsers);
router.post("/",[
    check('nombre','El nombre no es valido').not().isEmpty(),
    check('contraseña','Password debe ser minimo 6 letras').isLength({min :6}),
    check('correo',"El correo no es valido").isEmail(),
    check('correo').custom(emailExiste),
    validateDocuments,
],postUser);

router.delete("/:id",[
    validateJWT,
    isAdminRole,
    check("id", 'No es un ObjectID MongoDB valido').isMongoId(),
    check('id').custom(userExistsById),
    validateDocuments
],deleteUser)
router.put("/:id",[
    check('id', 'No es un ObjectID MongoDB válido').isMongoId(),
    check('id').custom(userExistsById),
    validateDocuments
], putUser)

module.exports =  router;