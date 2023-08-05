const mongoose = require("mongoose");

const dbConnection = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Conectado a GiveTo`);
    } catch (error) {
        console.log(error);
        throw new Error('No se pudo conectar');
    }
}

module.exports = {
    dbConnection
}