const express = require('express')
const controller = require('../controllers/product.controller')
const { check, validationResult } = require('express-validator')

const router = express.Router()

router.get('/', controller.getAllProducts)

router.post(
  '/register-product',
  [
    check('productName')
      .not()
      .isEmpty()
      .isLength({ min: 3 })
      .withMessage('ProductName must be atleast 3 characters long')
  ],
  controller.insertProduct
)

// Get Single  Users
router.get('/single-product/:id', controller.getSingleProduct)

// Update User
router.put('/update-product/:id', controller.updateProduct)

// Delete User
router.delete('/delete-product/:id', controller.deleteProduct)
module.exports = router