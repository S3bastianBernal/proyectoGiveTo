const {response} = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/Usuarios.js');
const { generateJWT } = require('../helpers/generate.JWT.js');

const login = async (req, res=response) =>{
    const {correo,contraseña} = req.body;
    try {
        const usuario = await Usuario.findOne({correo});
        if (!usuario) {
            return res.status(400).json({
                msg: "Usuario Incorrecto"
            })
        }

        const validPassword = bcryptjs.compareSync(contraseña,usuario.contraseña);
        if (!validPassword) {
            return res.status(400).json({
                msg:"contraseña Incorrecta"
            })
        }

        const token = await generateJWT(usuario.id);
        return res.json({
            usuario,
            token
        })

    } catch (error) {
        console.log(error);
        return res.json({
            msg: "contacte al servicio tecnico-sebas201154@gmail.com"
        })
    }
}

module.exports = {login}