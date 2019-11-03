const express = require('express')
const controller = require('../controllers/blog.controller')
const { check, validationResult } = require('express-validator')

const router = express.Router()

router.get('/', controller.getAllBlogs)

router.post(
  '/register-blog',
  [
    check('blogName')
      .not()
      .isEmpty()
      .isLength({ min: 3 })
      .withMessage('BlogName must be atleast 3 characters long')
  ],
  controller.insertBlog
)

// Get Single  Users
router.get('/single-blog/:id', controller.getSingleBlog)

// Update User
router.put('/update-blog/:id', controller.updateBlog)

// Delete User
router.delete('/delete-blog/:id', controller.deleteBlog)
module.exports = router
