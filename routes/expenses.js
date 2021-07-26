const { Router } = require('express');
const { check } = require('express-validator')

const {
    expensesGet,
    expensesPost,
    expensesPut,
    expensesDelete
} = require('../controllers/expenses');

const router = Router()

router.get('/', expensesGet);

router.post('/', [
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('categoria', 'La categoria es obligatoria').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('importe', 'El importe es obligatorio').not().isEmpty(),
], expensesPost);

router.put('/:id', [
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('categoria', 'La categoria es obligatoria').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('importe', 'El importe es obligatorio').not().isEmpty(),
], expensesPut);

router.delete('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
], expensesDelete);

module.exports = router;