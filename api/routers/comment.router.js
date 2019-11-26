const express = require('express');
const { check, validationResult } = require('express-validator');
const controller = require('../controllers/comment.controller');

const router = express.Router();

router.get('/', controller.getAllComment);

router.get('/hot-comment', controller.getHotCommentComment);
router.post(
  '/register-comment',
  [
    check('commentName')
      .not()
      .isEmpty()
      .isLength({ min: 3 })
      .withMessage('CommentName must be atleast 3 characters long'),
  ],
  controller.insertComment
);
router.get('/comment-by-productid/:id', controller.getCommentByProductId);
// Get Single  Users
router.get('/single-comment/:id', controller.getSingleComment);
// Get Single  Comment By URL
router.get('/single-comment-url/:id', controller.getSingleCommentByUrl);
router.post('/create-comment', controller.insertComment);
// Update User
router.put('/update-comment/:id', controller.updateComment);

// Delete User
router.delete('/delete-comment/:id', controller.deleteComment);
module.exports = router;
