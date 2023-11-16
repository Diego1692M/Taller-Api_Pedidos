const {response} = require('express')
const pedido = require('../models/pedido')
const async = require('hbs/lib/async')

Pedido = require('../models/pedido')

const getPedido = async(req, res ) => {

    const pedidos = await Pedido.find(); //Obtener todos los documentos de una coleccion
    res.json({
        msg: pedidos
    })
}

const postPedido = async(req, res) => {
    
    const datos = req.query //Capturara datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const pedido = new Pedido(datos)//Instanciar el objeto
        await pedido.save() //Guardar en la base de datos 
        console.log(pedido)
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    
    res.json({
        msg: mensaje
    })

  
}

const putPedido = async(req, res) => {
    const { id, fecha, hora, cliente, direccion, estado, total } = req.query //Desestructurar
    let mensaje = ''

    try{
        const pedido = await Pedido.findOneAndUpdate({id: id},{fecha: fecha, hora: hora, cliente: cliente, direccion: direccion, estado: estado, total:total })
        mensaje = 'Actualizacion exitosa'

    } catch (error) {
        mensaje = error
    }
    
    res.json({
        msg: mensaje
    })
}

const deletePedido = async(req, res ) => {
    const { id } = req.query //Desestructurar
    let mensaje = ''

    try {
        const pedido = await Pedido.findOneAndUpdate({id: id}); //Obtener todos los documentos de una coleccion
        mensaje = 'Eliminacion exitosa'
        
    } catch (error) {
        mensaje = error
    }

    res.json({
        msg: pedido
    })
}
   




module.exports = {
    getPedido,
    postPedido,
    putPedido,
    deletePedido
}