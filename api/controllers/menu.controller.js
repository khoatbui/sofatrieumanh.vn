const mongoose = require('mongoose')
const { check, validationResult } = require('express-validator')
const Menu = require('../models/menu.model')

module.exports.getAllMenus = function(req, res) {
  Menu.find()
    .select({
      menuName: 1,
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
module.exports.getAllMenusWithURL = function(req, res) {
  Menu.find()
    .select({
      menuName: 1,
      _id: 1,
      url: 1
    })
    .exec((error, response) => {
      if (error) {
        return next(error)
      } else {
        res.status(200).json(response)
      }
    })
}
module.exports.getSingleMenu = function(req, res, next) {
  Menu.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json(data)
    }
  })
}
module.exports.getSingleMenuWithURL = function(req, res, next) {
  Menu.findOne({ url: req.params.id }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json(data)
    }
  })
}
module.exports.insertMenu = function(req, res, next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array())
  } else {
    const menu = new Menu(req.body)
    menu
      .save()
      .then((response) => {
        res.status(201).json({
          message: 'Menu successfully created!',
          result: response
        })
      })
      .catch((error) => {
        console.log(error)
        res.status(500).json({
          error
        })
      })
  }
}

module.exports.updateMenu = function(req, res, next) {
  Menu.findByIdAndUpdate(
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

module.exports.deleteMenu = function(req, res, next) {
  Menu.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
}
