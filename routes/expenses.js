const { Router } = require('express');

const {
    expensesGet
} = require('../controllers/expenses');

const router = Router()

router.get('/', expensesGet);

module.exports = router;