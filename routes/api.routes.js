const express = require('express');

const router = express.Router();

router.use('/product', require('../controllers/product.controller'));

router.use('/cashRegister', require('../controllers/cashRegister.controller'));

module.exports = router;