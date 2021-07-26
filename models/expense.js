const { Schema, model } = require('mongoose');

const ExpenseSchema = Schema({
    fecha: {
        type: Date,
        required: [true, 'La fecha es obligatoria']
    },
    categoria: {
        type: String,
        required: [true, 'La categoria es obligatoria']
    },
    subcategoria: {
        type: String,
        default: 'Compras (otros)'
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es obligatoria']
    },
    comentario: {
        type: String,
    },
    importe: {
        type: Number,
        required: [true, 'El importe es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    },
})

ExpenseSchema.methods.toJson = function() {
    const { __v, ...expense } = this.toObject()
    return expense
}

module.exports = model('Expense', ExpenseSchema)