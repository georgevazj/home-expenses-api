const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Expense = require('../models/expense');

const expensesGet = async(req = request, res = response) => {

    const { limit = 5, from = 0 } = req.query;
    const query = { estado: true };

    const [total, expenses] = await Promise.all([
        Expense.countDocuments(query),
        Expense.find(query)
        .sort({ fecha: -1 })
        .limit(limit)
        .skip(from)
    ]);

    res.json({ total, expenses });

}

const expensesPost = async(req, res = response) => {
    const { fecha, categoria, subcategoria, descripcion, comentario, importe, estado } = req.body;
    const expense = new Expense({
        fecha,
        categoria,
        subcategoria,
        descripcion,
        comentario,
        importe,
        estado
    });

    await expense.save();
    res.json(expense);
}

const expensesPut = async(req = request, res = response) => {
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const expense = await Expense.findOneAndUpdate(id, resto);
    res.json(expense);
}

const expensesDelete = async(req = request, res = response) => {
    const { id } = req.params;
    const expense = await Expense.findByIdAndUpdate(id, { estado: false });
    res.json(expense);
}

// Exportacion de los controladores
module.exports = {
    expensesGet,
    expensesPost,
    expensesPut,
    expensesDelete
};