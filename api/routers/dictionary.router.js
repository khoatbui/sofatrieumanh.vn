const express = require('express');
const { check, validationResult } = require('express-validator');
const controller = require('../controllers/dictionary.controller');

const router = express.Router();

router.get('/', controller.getAllDictionarys);
router.get('/used', controller.getAllDictionarysUsed);
router.post(
  '/register-dictionary',
  [
    check('dictionaryName')
      .not()
      .isEmpty()
      .isLength({ min: 3 })
      .withMessage('DictionaryName must be atleast 3 characters long'),
  ],
  controller.insertDictionary
);

// Get Single  Users
router.get('/single-dictionary/:id', controller.getSingleDictionary);

// Update User
router.put('/update-dictionary/:id', controller.updateDictionary);

// Delete User
router.delete('/delete-dictionary/:id', controller.deleteDictionary);
module.exports = router;
