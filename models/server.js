const express = require('express');
const { dbConnection } = require('../database/config')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.conectarDB()
    }

    async conectarDB() {
        await dbConnection()
    }

    routes() {

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor escuchando en el puerto', this.port);
        })
    }

}

module.exports = Server