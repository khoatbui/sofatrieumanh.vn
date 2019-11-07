const express = require('express')
const { check, validationResult } = require('express-validator')
const controller = require('../controllers/menu.controller')

const router = express.Router()

router.get('/', controller.getAllMenus)
router.get('/get-category-withurl', controller.getAllMenusWithURL)

router.post(
  '/register-menu',
  [
    check('menuName')
      .not()
      .isEmpty()
      .isLength({ min: 2 })
      .withMessage('MenuName must be atleast 3 characters long')
  ],
  controller.insertMenu
)

// Get Single  Users
router.get('/single-menu/:id', controller.getSingleMenu)

// Update User
router.put('/update-menu/:id', controller.updateMenu)

// Delete User
router.delete('/delete-menu/:id', controller.deleteMenu)
module.exports = router
