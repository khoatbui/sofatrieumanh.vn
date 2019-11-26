const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const Menu = require('../models/menu.model');

module.exports.getAllMenus = function(req, res) {
  try {
    Menu.find()
      .select({
        menuName: 1,
        _id: 1,
        createDate: 1,
        modifyDate: 1,
        isHot: 1,
        isActive: 1,
      })
      .exec((error, response) => {
        if (error) {
          console.log('Error')
        } else {
          res.status(200).json(response);
        }
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getMenusByUrl = function(req, res) {
  try {
    Menu.find({
      isActive: true,
      parentMenu: { $elemMatch: { url: req.params.id } },
    })
      .select({
        menuName: 1,
        _id: 1,
        url: 1,
      })
      .exec((error, response) => {
        if (error) {
          console.log('Error')
        } else {
          res.status(200).json(response);
        }
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getAllMenusWithURL = function(req, res) {
  try {
    Menu.find({ isActive: true })
      .select({
        menuName: 1,
        _id: 1,
        url: 1,
        parentMenu: 1,
      })
      .exec((error, response) => {
        if (error) {
          console.log('Error')
        } else {
          res.status(200).json(response);
        }
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getAllMenusWithLess = function(req, res) {
  try {
    Menu.find()
      .select({
        menuName: 1,
        _id: 1,
        url: 1,
      })
      .exec((error, response) => {
        if (error) {
          console.log('Error')
        } else {
          res.status(200).json(response);
        }
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getSingleMenu = function(req, res, next) {
  try {
    Menu.findById(req.params.id, (error, data) => {
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
module.exports.getSingleMenuWithURL = function(req, res, next) {
  try {
    Menu.findOne({ url: req.params.id }, (error, data) => {
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
module.exports.insertMenu = function(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array());
    } else {
      const menu = new Menu(req.body);
      menu
        .save()
        .then(response => {
          res.status(201).json({
            message: 'Menu successfully created!',
            result: response,
          });
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({
            error,
          });
        });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.updateMenu = function(req, res, next) {
  try {
    Menu.findByIdAndUpdate(
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
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteMenu = function(req, res, next) {
  try {
    Menu.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        console.log('Error')
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
