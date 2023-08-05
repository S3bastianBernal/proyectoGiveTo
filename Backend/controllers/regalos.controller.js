const Regalo = require('../models/Regalos.js');
const { getDataCompra } = require('./appController.js');

const getRegalos = async (req,res) =>{
    const regalos = await Regalo.find();
    res.json({
        regalos
    })
}

const postRegalos = async (req,res) =>{
    const regalo = new Regalo(req.body);
    try {
        const nuevoRegalo = await regalo.save();
        getDataCompra(regalo.correo);
        res.json(nuevoRegalo)
    } catch (error) {
        console.log(error);
    }
};

const deleteRegalo = async (req,res) =>{
    const {id} = req.params;

    const regalo = await Regalo.findByIdAndDelete(id);

    res.json(regalo)
};

const putRegalo = async (req, res) =>{
    const {id} = req.params;

    const {_id,correo,...resto} = req.body;

    const regalo = await Regalo.findByIdAndUpdate(id);

    res.json({
        "msg":"Regalo Actualizado",
        regalo:regalo
    });
}

module.exports = {
    getRegalos,
    postRegalos,
    deleteRegalo,
    putRegalo
}