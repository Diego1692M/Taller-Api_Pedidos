const express = require('express')
const { dbConection } = require('../database/config')

class Server{
    
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.pedidoPath = '/pedido' //Ruta de la API
        this.routes()
        this.conectarDB()
    }

    listen(){
        this.app.listen(
         this.port, () => {
            console.log('Escuchando por el puerto'+this.port)
         }
        )
    }

    routes(){
        this.app.use(this.pedidoPath, require('../routes/pedido'))
    }

    conectarDB(){
        dbConection()
    }
}

module.exports = {Server} //Exportación de la clase

/*
git:

https://github.com/dalzlad/2670689.git

*/

/*
Crear el método get y post para una colección de su proyecto.
Emplear un array de objetos para alamcenar la información

*/