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

module.exports = {
    expensesGet
};