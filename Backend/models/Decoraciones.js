const {Schema, model} = require('mongoose');

const DecoracionSchema = Schema({
    tipoDecoracion:{
        type:String,
        required: [true, "obligatorio"]
    },
    precio:{
        type: Number,
        required: [true, "precio obligatorio"]
    },
    stock:{
        type: Number,
        required: [true, 'stock obligatorio']
    }
});

module.exports = model('Decoraciones', DecoracionSchema);
