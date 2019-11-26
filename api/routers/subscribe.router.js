const express = require('express');
const { check, validationResult } = require('express-validator');
const controller = require('../controllers/subscribe.controller');

const router = express.Router();

router.get('/', controller.getAllSubscribe);

router.get('/hot-subscribe', controller.getHotSubscribeSubscribe);
router.post(
  '/register-subscribe',
  controller.insertSubscribe
);

// Get Single  Users
router.get('/single-subscribe/:id', controller.getSingleSubscribe);
// Get Single  Subscribe By URL
router.get('/single-subscribe-url/:id', controller.getSingleSubscribeByUrl);

// Update User
router.put('/update-subscribe/:id', controller.updateSubscribe);

// Delete User
router.delete('/delete-subscribe/:id', controller.deleteSubscribe);
module.exports = router;
