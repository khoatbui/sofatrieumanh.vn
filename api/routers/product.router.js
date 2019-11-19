const express = require('express');
const { check, validationResult } = require('express-validator');
const controller = require('../controllers/product.controller');

const router = express.Router();

router.get('/', controller.getAllProducts);
router.get('/product-list', controller.getAllProductsList);
router.get(
  '/product-list-by-category/:id',
  controller.getAllProductsListByCategory
);
router.get('/product-list-by-state/new', controller.getAllProductsListByNew);
router.get(
  '/product-list-by-state/saleoff',
  controller.getAllProductsListBySaleOff
);
router.get('/product-list-by-state/hot', controller.getAllProductsListByHot);
router.get(
  '/product-list-by-state/trend',
  controller.getAllProductsListByTrend
);

router.post(
  '/register-product',
  [
    check('productName')
      .not()
      .isEmpty()
      .isLength({ min: 3 })
      .withMessage('ProductName must be atleast 3 characters long'),
  ],
  controller.insertProduct
);

// Get Single  Users
router.get('/single-product/:id', controller.getSingleProduct);
// Get Single  Product by URL
router.get('/single-product-by-url/:id', controller.getSingleProductByUrl);
// Update User
router.put('/update-product/:id', controller.updateProduct);

// Delete User
router.delete('/delete-product/:id', controller.deleteProduct);
module.exports = router;
