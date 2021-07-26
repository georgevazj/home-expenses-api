const express = require('express');
const { dbConnection } = require('../database/config')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.expensesPath = '/api/expenses'

        // Conectarse a la base de datos
        this.conectarDB()

        // Rutas del API
        this.routes()
    }

    async conectarDB() {
        await dbConnection()
    }

    routes() {
        this.app.use(this.expensesPath, require('../routes/expenses'))

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor escuchando en el puerto', this.port);
        })
    }

}

module.exports = Server