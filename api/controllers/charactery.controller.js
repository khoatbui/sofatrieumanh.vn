const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const Charactery = require('../models/charactery.model');

module.exports.getAllCharacterys = function(req, res) {
  Charactery.find()
    .select({
      characteryName: 1,
      _id: 1,
      createDate: 1,
      modifyDate: 1,
      isHot: 1,
      isFilter: 1,
      isActive: 1,
    })
    .exec((error, response) => {
      if (error) {
        return next;
      } else {
        res.status(200).json(response);
      }
    });
};
module.exports.getAllFilterCharacterys = function(req, res) {
  Charactery.find({ isFilter: true })
    .select({
      characteryName: 1,
      _id: 1,
    })
    .exec((error, response) => {
      if (error) {
        return next;
      } else {
        res.status(200).json(response);
      }
    });
};
module.exports.getSingleCharactery = function(req, res, next) {
  Charactery.findById(req.params.id, (error, data) => {
    if (error) {
      return next;
    } else {
      res.status(200).json(data);
    }
  });
};

module.exports.insertCharactery = function(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    const charactery = new Charactery(req.body);
    charactery
      .save()
      .then(response => {
        res.status(201).json({
          message: 'Charactery successfully created!',
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

module.exports.updateCharactery = function(req, res, next) {
  Charactery.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next;
      } else {
        res.json(data);
      }
    }
  );
};

module.exports.deleteCharactery = function(req, res, next) {
  Charactery.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next;
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
