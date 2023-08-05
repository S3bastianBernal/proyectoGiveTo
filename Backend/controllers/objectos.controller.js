const Objecto = require('../models/Objectos.js');

const getObjectos = async (req,res) =>{
    const objectos = await Objecto.find();
    res.json({
        objectos
    })
};

module.exports = {
    getObjectos
}