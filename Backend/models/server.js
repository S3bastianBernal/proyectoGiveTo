const express = require('express'); 
const cors = require('cors');
const {dbConnection} = require('../database/config.js')

class Server {
    constructor(){
        this.app = express();

        this.port = process.env.PORT
        this.paths = {
            auth:       '/api/auth',
            search:     '/api/search',
            usuarios:   '/api/usuarios',
            message:    '/api/message',
            listas:    '/api/listas',
            regalos: '/api/regalos'
            
        }
       

        this.connectDB();
        this.middleware();
        this.routes();
    }
    async connectDB(){
        await dbConnection();
    }
    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.paths.auth, require('../routes/auth.routes.js'))
        this.app.use(this.paths.usuarios, require('../routes/usuario.routes.js'))
        this.app.use(this.paths.search, require('../routes/search.routes.js'));
        this.app.use(this.paths.message, require('../routes/message.routes.js'));
        this.app.use(this.paths.listas, require('../routes/listas.routes.js'));
        this.app.use(this.paths.regalos, require('../routes/regalo.routes.js'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`server Running on port ${this.port}`);
        });
    }
}

module.exports = Server