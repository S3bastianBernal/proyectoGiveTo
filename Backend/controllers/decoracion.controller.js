const Decoracion = require('../models/Decoraciones.js');

const getDecoracion = async(req,res) =>{
    try {
        const decoraciones = await Decoracion.find();
        res.json({
            decoraciones
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getDecoracion
}
