const { body, check } = require('express-validator');

const rules = [
    body('name')
        .isLength({ min: 2 }).withMessage('Por lo menos necesito 2 caracteres'),
    check('year')
        .notEmpty().withMessage('Necesito un año').bail()
        .isInt({ min: 2013 }).withMessage('No menor a 2013')
        .isInt({ max: 2023 }).withMessage('No mayor a 2023'),
];

module.exports = rules;
