const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const Comment = require('../models/comment.model');

module.exports.getAllComment = function(req, res) {
  Comment.find()
    .select({
      productId: 1,
      _id: 1,
      fullName: 1,
      email: 1,
      phoneNumber: 1,
      comment: 1,
      commentDate: 1
    })
    .exec((error, response) => {
      if (error) {
        console.log('Error')
      } else {
        res.status(200).json(response);
      }
    });
};
module.exports.getHotCommentComment = function(req, res) {
  Comment.find({ isHot: true })
    .select({
      productId: 1,
      _id: 1,
      fullName: 1,
      email: 1,
      phoneNumber: 1,
      comment: 1,
      commentDate: 1
    })
    .exec((error, response) => {
      if (error) {
        console.log('Error')
      } else {
        res.status(200).json(response);
      }
    });
};
module.exports.getCommentByProductId = function(req, res, next) {
  try {
    Comment.find({ productId: req.params.id }, (error, data) => {
      if (error) {
        console.log('Error')
      } else {
        res.status(200).json(data);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getSingleComment = function(req, res, next) {
  try {
    Comment.findById(req.params.id, (error, data) => {
      if (error) {
        console.log('Error')
      } else {
        res.status(200).json(data);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getSingleCommentByUrl = function(req, res, next) {
  try {
    Comment.findOne({ url: req.params.id }, (error, data) => {
      if (error) {
        console.log('Error')
      } else {
        res.status(200).json(data);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports.insertComment = function(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    const comment = new Comment(req.body);
    comment
      .save()
      .then(response => {
        res.status(201).json({
          message: 'Comment successfully created!',
          result: response,
        });
      })
      .catch(error => {
        res.status(500).json({
          error,
        });
      });
  }
};

module.exports.updateComment = function(req, res, next) {
  Comment.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log('Error')
      } else {
        res.json(data);
      }
    }
  );
};

module.exports.deleteComment = function(req, res, next) {
  Comment.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      console.log('Error')
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
