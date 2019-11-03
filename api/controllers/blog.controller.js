const Blog = require('../models/blog.model')
const mongoose = require('mongoose')
const { check, validationResult } = require('express-validator')

module.exports.getAllBlogs = function(req, res) {
  Blog.find()
    .select({
      blogName: 1,
      _id: 1,
      createDate: 1,
      modifyDate: 1,
      isHot: 1,
      isActive: 1
    })
    .exec((error, response) => {
      if (error) {
        return next(error)
      } else {
        res.status(200).json(response)
      }
    })
}

module.exports.getSingleBlog = function(req, res, next) {
  Blog.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json(data)
    }
  })
}

module.exports.insertBlog = function(req, res, next) {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array())
  } else {
    const blog = new Blog(req.body)
    blog
      .save()
      .then((response) => {
        res.status(201).json({
          message: 'Blog successfully created!',
          result: response
        })
      })
      .catch((error) => {
        res.status(500).json({
          error: error
        })
      })
  }
}

module.exports.updateBlog = function(req, res, next) {
  Blog.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    }
  )
}

module.exports.deleteBlog = function(req, res, next) {
  Blog.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
}
