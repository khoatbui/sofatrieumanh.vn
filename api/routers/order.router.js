const express = require('express');
const { check, validationResult } = require('express-validator');
const controller = require('../controllers/order.controller');

const router = express.Router();

router.get('/', controller.getAllOrders);

router.post('/new-order', controller.createOrder);
module.exports = router;
