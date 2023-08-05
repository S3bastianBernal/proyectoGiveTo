
const isAdminRole =  (req, res, next) =>{
    try {
        if (!req.usuario){
            return res.status(500).json({
                msg: 'Se quiere verificar el role sin validar el validar el token'
            })
        }

        const {rol, nombre} = req.usuario;

        if ( rol !== 'ADMIN') {
            return res.status(401).json({
                msg: `${nombre} no es administrador - No puede hacer esto`
            })
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    isAdminRole
}