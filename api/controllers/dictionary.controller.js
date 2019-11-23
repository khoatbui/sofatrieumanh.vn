const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const Dictionary = require('../models/dictionary.model');

module.exports.getAllDictionarys = function(req, res) {
  Dictionary.find()
    .select({
      dictionaryCode: 1,
      dictionaryName: 1,
      _id: 1,
      createDate: 1,
      modifyDate: 1,
      isHot: 1,
      isActive: 1,
    })
    .exec((error, response) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json(response);
      }
    });
};
module.exports.getAllDictionarysUsed = function(req, res) {
  Dictionary.find({ isActive: true })
    .select({
      dictionaryCode: 1,
      dictionaryName: 1,
      _id: 0,
    })
    .exec((error, response) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json(response);
      }
    });
};
module.exports.getSingleDictionary = function(req, res, next) {
  Dictionary.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json(data);
    }
  });
};

module.exports.insertDictionary = function(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    const dictionary = new Dictionary(req.body);
    dictionary
      .save()
      .then(response => {
        res.status(201).json({
          message: 'Dictionary successfully created!',
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

module.exports.updateDictionary = function(req, res, next) {
  Dictionary.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    }
  );
};

module.exports.deleteDictionary = function(req, res, next) {
  Dictionary.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
