const Usuario = require('../models/Usuarios.js');
const bcryptjs = require('bcryptjs');
const { getbill } = require('./appController.js');


const getUsers = async (req,res)=>{
    const usuarios = await Usuario.find();
    res.json({
        usuarios
    })
}

const postUser = async (req,res) =>{
    const {nombre,correo,preferencias,edad,telefono,contraseña,rol} = req.body
    const usuario = new Usuario({nombre,correo,preferencias,edad,telefono,contraseña,rol})

    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail){
        return res.status(400).json({
            msg: "Email is already registered"
        });
    };

    const salt = bcryptjs.genSaltSync();
    usuario.contraseña = bcryptjs.hashSync(contraseña,salt);
    getbill(correo);
    await usuario.save();

    res.json({
        usuario
    });

}

const putUser = async (req,res) =>{
    const {id} = req.params;

    const {_id,nombre,correo,edad,contraseña, ...resto } = req.body;

    if (contraseña) {
        const salt = bcryptjs.genSaltSync();
        resto.contraseña = bcryptjs.hashSync( contraseña, salt );
    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto );

    res.json({
        msg:"Usuario Actualizado",
        usuario: usuario
    })
}

const deleteUser = async (req,res) =>{
    const {id} = req.params

    const usuario = await Usuario.findByIdAndDelete(id);

    res.json(usuario)
}

module.exports = {
    getUsers,
    postUser,
    putUser,
    deleteUser
}