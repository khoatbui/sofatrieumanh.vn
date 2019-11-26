const express = require('express');
const { check, validationResult } = require('express-validator');
const controller = require('../controllers/login.controller');

const router = express.Router();

router.get('/', controller.getAllLogins);

router.post(
  '/register-login',
  [
    check('loginName')
      .not()
      .isEmpty()
      .isLength({ min: 3 })
      .withMessage('LoginName must be atleast 3 characters long'),
  ],
  controller.insertLogin
);
router.post('/user-login', controller.adminLogin);
router.post('/reset', controller.resetPass);
router.post('/change-pass/:hash', controller.changePassword);
// Get Single  Users
router.get('/single-login/:id', controller.getSingleLogin);

// Update User
router.put('/update-login/:id', controller.updateLogin);

// Delete User
router.delete('/delete-login/:id', controller.deleteLogin);
module.exports = router;
