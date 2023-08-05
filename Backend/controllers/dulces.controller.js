const Dulce = require('../models/Dulces.js');

const getDulces = async (req,res) =>{
    const dulces = await Dulce.find();

    res.json({
        dulces
    })
}

module.exports = {
    getDulces
}