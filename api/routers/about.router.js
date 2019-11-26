const express = require('express');
const { check, validationResult } = require('express-validator');
const controller = require('../controllers/about.controller');

const router = express.Router();

router.get('/', controller.getAllAbouts);

router.get('/hot-about', controller.getHotAboutAbouts);
router.post(
  '/register-about',
  [
    check('aboutName')
      .not()
      .isEmpty()
      .isLength({ min: 3 })
      .withMessage('AboutName must be atleast 3 characters long'),
  ],
  controller.insertAbout
);

// Get Single  Users
router.get('/single-about/:id', controller.getSingleAbout);
// Get Single  About By URL
router.get('/single-about-url/:id', controller.getSingleAboutByUrl);

// Update User
router.put('/update-about/:id', controller.updateAbout);

// Delete User
router.delete('/delete-about/:id', controller.deleteAbout);
module.exports = router;
