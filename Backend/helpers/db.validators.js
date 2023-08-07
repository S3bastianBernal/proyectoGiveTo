
const Usuario = require('../models/Usuarios.js');



const emailExiste = async( correo = '' ) =>{
    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail) {
        throw new Error(`El email: ${ correo }, ya está registrado`);
    }
}

const userExistsById = async( id ) => {
const userExists = await Usuario.findById(id);
if (!userExists) {
    throw new Error(`El id (usuario) no existe ${id}`);
}



}

module.exports = {
    emailExiste,
    userExistsById
}