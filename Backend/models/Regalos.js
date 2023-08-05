const {Schema, model} = require('mongoose');

const RegaloSchema = Schema({
    correo:{
        type: String,
        required: [true, 'email is required']
    },
    fecha:{
        type: String,
        required: [true, 'address is required']
    },
    hora:{
        type: String,
        required: [true, 'hour is required']
    },
    detalles:{
        type: String,
        require: true
    },
    receptor:{
        type: String,
        required: true
    },
    dulces:{
        type: String,
        require: true
    },
    flores:{
        type: String,
        require: true
    },
    peluches:{
        type: String,
        require: true
    }

})

module.exports = model('Regalo', RegaloSchema)