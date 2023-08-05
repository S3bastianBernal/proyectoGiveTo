const {response} = require('express');
const {ObjectId} = require('mongoose').Types

const Usuario = require('../models/Usuarios.js');

const allowedCollections = [
    'usuarios',
]

const buscarUsuarios = async(criterio="",res= response) =>{
    const isMongoId = ObjectId.isValid( criterio );

    if ( isMongoId ) {
        const usuario = await Usuario.findById(criterio);
        return res.json({
            results: (usuario) ? [usuario] : []
        });
    }

    const regex = new RegExp( criterio, 'i');
    const usuarios = await Usuario.find({
        $or: [{ nombre: regex},{correo: regex}]
    });

    res.json({
        results: usuarios
    })
}

const search = (req,res = response) =>{
    const { coleccion, criterio } = req.params;

    if (!allowedCollections.includes(coleccion)) {
        return res.status(400).json({
            msg: `El buscador solo permite las colecciones: ${allowedCollections}`
        })
    }

    switch (coleccion) {
        case 'usuarios':
                buscarUsuarios(criterio, res);
            break;
    
        default:
            res.status(500).json({
                msg: 'This search doesnt exists'
            })
            break;
    }
}

module.exports = {
    search
}