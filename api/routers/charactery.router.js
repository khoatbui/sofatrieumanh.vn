const express = require('express')
const controller = require('../controllers/charactery.controller')
const { check, validationResult } = require('express-validator')

const router = express.Router()

router.get('/', controller.getAllCharacterys)

router.post(
  '/register-charactery',
  [
    check('characteryName')
      .not()
      .isEmpty()
      .isLength({ min: 3 })
      .withMessage('CharacteryName must be atleast 3 characters long')
  ],
  controller.insertCharactery
)

// Get Single  Users
router.get('/single-charactery/:id', controller.getSingleCharactery)

// Update User
router.put('/update-charactery/:id', controller.updateCharactery)

// Delete User
router.delete('/delete-charactery/:id', controller.deleteCharactery)
module.exports = router
