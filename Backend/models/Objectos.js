const {Schema, model} = require('mongoose');

const objectoSchema = Schema({
    tipoObjecto:{
        type: String,
        required: [true, 'tipo obligatorio']
    },
    precio:{
        type: Number,
        required: [true, 'precio obligatorio']
    },
    stock:{
        type: Number,
        required: [true, 'stock obligatorio']
    }
})

module.exports = model('Objecto', objectoSchema);