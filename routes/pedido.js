const {Router} = require('express')

const route = Router()

//Listar todos los datos
const {getPedido, postPedido, putPedido, deletePedido} = require('../controllers/pedido') //Importando el controlador de ususarios


route.get('/', getPedido)

route.post('/', postPedido)

route.put('/', putPedido)

route.delete('/', deletePedido)


//Consultar un dato
// route.get('/consultarUsuario', (req, res) => {
//     res.json({
//         msg: 'Datos'
//     })
// })

//Método para agregar datos
// route.post('/', (req, res) => {
   
//     res.json({
//         msg: 'Inserción exitosa'
//     })
// })

// route.put('/', (req, res) => {
//     //Implementar lógica
//     res.json({
//         msg:'Modificación exitosa'
//     })
// })

// route.delete('/', (req, res) => {
//     //Implementar lógica
//     res.json({
//         msg:'Eliminación exitosa'
//     })
// })

module.exports = route