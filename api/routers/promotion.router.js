const express = require('express');
const { check, validationResult } = require('express-validator');
const controller = require('../controllers/promotion.controller');

const router = express.Router();

router.get('/', controller.getAllPromotions);
router.get('/active', controller.getAllPromotionsByActive);
router.post(
  '/register-promotion',
  [
    check('promotionName')
      .not()
      .isEmpty()
      .isLength({ min: 3 })
      .withMessage('PromotionName must be atleast 3 characters long'),
  ],
  controller.insertPromotion
);

// Get Single  Promotinos
router.get('/single-promotion/:id', controller.getSinglePromotion);

// Get Promotion By Type
router.get('/promotion-bytype/:id', controller.getPromotionByType);
// Update Promotino
router.put('/update-promotion/:id', controller.updatePromotion);

// Delete Promotino
router.delete('/delete-promotion/:id', controller.deletePromotion);
module.exports = router;
