const express = require('express')
const controller = require('../controllers/promotion.controller')
const { check, validationResult } = require('express-validator')

const router = express.Router()

router.get('/', controller.getAllPromotions)
router.get('/active', controller.getAllPromotionsByActive)
router.post(
  '/register-promotion',
  [
    check('promotionName')
      .not()
      .isEmpty()
      .isLength({ min: 3 })
      .withMessage('PromotionName must be atleast 3 characters long')
  ],
  controller.insertPromotion
)

// Get Single  Users
router.get('/single-promotion/:id', controller.getSinglePromotion)

// Update User
router.put('/update-promotion/:id', controller.updatePromotion)

// Delete User
router.delete('/delete-promotion/:id', controller.deletePromotion)
module.exports = router
