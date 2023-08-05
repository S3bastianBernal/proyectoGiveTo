
const Usuario = require('../models/Usuarios.js');



const emailExiste = async( email = '' ) =>{
    const existeEmail = await Usuario.findOne({email});
    if (existeEmail) {
        throw new Error(`El email: ${ email }, ya está registrado`);
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