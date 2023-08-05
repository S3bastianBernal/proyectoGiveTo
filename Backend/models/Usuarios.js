const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'name is required']
    },
    correo:{
        type: String,
        required: [true, 'email is required']
    },
    preferencias:{
        type: String,
        required: [true, 'preferencias is required']
    },
    edad:{
        type: String,
        required: [true, 'age is required']
    },
    telefono:{
        type: String,
        required: [true, 'phone is required']
    },
    contraseña:{
        type: String,
        required: [true, 'password is required']
    },
    rol:{
        type: String,
        default: 'USER',
        enum: ['ADMIN', 'USER']
    }
    

})

module.exports = model('Usuario', UsuarioSchema);