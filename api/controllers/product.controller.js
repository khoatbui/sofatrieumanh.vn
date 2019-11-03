const Product = require('../models/product.model')
const mongoose = require('mongoose')
const { check, validationResult } = require('express-validator')

module.exports.getAllProducts = function(req, res) {
  Product.find()
    .select({
      productName: 1,
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

module.exports.getSingleProduct = function(req, res, next) {
  Product.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json(data)
    }
  })
}

module.exports.insertProduct = function(req, res, next) {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array())
  } else {
    const product = new Product(req.body)
    product
      .save()
      .then((response) => {
        res.status(201).json({
          message: 'Product successfully created!',
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

module.exports.updateProduct = function(req, res, next) {
  Product.findByIdAndUpdate(
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

module.exports.deleteProduct = function(req, res, next) {
  Product.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
}
