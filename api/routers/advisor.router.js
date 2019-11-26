const express = require('express');
const { check, validationResult } = require('express-validator');
const controller = require('../controllers/advisor.controller');

const router = express.Router();

router.get('/', controller.getAllAdvisors);

router.get('/hot-advisor', controller.getHotAdvisorAdvisors);
router.post(
  '/register-advisor',
  controller.insertAdvisor
);

// Get Single  Users
router.get('/single-advisor/:id', controller.getSingleAdvisor);
// Get Single  Advisor By URL
router.get('/single-advisor-url/:id', controller.getSingleAdvisorByUrl);

// Update User
router.put('/update-advisor/:id', controller.updateAdvisor);

// Delete User
router.delete('/delete-advisor/:id', controller.deleteAdvisor);
module.exports = router;
