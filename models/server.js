const express = require('express');

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
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