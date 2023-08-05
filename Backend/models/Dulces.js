const {Schema, model} = require('mongoose');

const DulcesSchema = Schema({
    tipoDulce:{
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
    },
    proveedores:{
        type: String,
        required: [true, 'proveedor obligatorio']
    }
});

module.exports = model('Dulce', DulcesSchema);