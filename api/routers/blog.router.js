const express = require('express')
const { check, validationResult } = require('express-validator')
const controller = require('../controllers/blog.controller')

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
// Get Single  Blog By URL
router.get('/single-blog-url/:id', controller.getSingleBlogByUrl)

// Update User
router.put('/update-blog/:id', controller.updateBlog)

// Delete User
router.delete('/delete-blog/:id', controller.deleteBlog)
module.exports = router
