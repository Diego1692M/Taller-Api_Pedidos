const {Schema, model} = require('mongoose')

const PedidoSchema = ({
    id: {
        type: Number,
        required: true,
        unique: true,
        default: 0
    },
    fecha: {
        type: Date,
        require: [true, 'La fecha es requerida'],
        format: 'YYYY-MM-DD'
    },
    hora: {
        type: Date,
        required: true
    },
    cliente: {
        type: String,
        ref: 'Usuario',
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        enum: ['pendiente', 'en proceso', 'entregado', 'cancelado'],
        required: true
    },
    total: {
        type: Number,
        required: true
    },
})

module.exports = model('Pedido', PedidoSchema)

