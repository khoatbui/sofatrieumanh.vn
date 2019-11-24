const express = require('express');
const { check, validationResult } = require('express-validator');
const controller = require('../controllers/menu.controller');

const router = express.Router();

router.get('/', controller.getAllMenus);
router.get('/get-category-byurl/:id', controller.getMenusByUrl);
router.get('/get-category-withurl', controller.getAllMenusWithURL);
router.get('/get-category-with-less', controller.getAllMenusWithLess);
router.post(
  '/register-menu',
  [
    check('menuName')
      .not()
      .isEmpty()
      .isLength({ min: 2 })
      .withMessage('MenuName must be atleast 3 characters long'),
  ],
  controller.insertMenu
);

// Get Single  Users
router.get('/single-menu/:id', controller.getSingleMenu);
// Get Single  Users
router.get('/single-menu-with-url/:id', controller.getSingleMenuWithURL);

// Update User
router.put('/update-menu/:id', controller.updateMenu);

// Delete User
router.delete('/delete-menu/:id', controller.deleteMenu);
module.exports = router;
