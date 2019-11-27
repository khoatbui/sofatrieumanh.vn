const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const Promotion = require('../models/promotion.model');

module.exports.getAllPromotions = function(req, res) {
  Promotion.find()
    .select({
      promotionName: 1,
      _id: 1,
      createDate: 1,
      modifyDate: 1,
      isHot: 1,
      isNew: 1,
      url: 1,
      promotionIntro: 1,
      isActive: 1,
      validDate: 1,
    })
    .exec((error, response) => {
      if (error) {
        console.log('Error');
      } else {
        res.status(200).json(response);
      }
    });
};

module.exports.getAllPromotionsByActive = function(req, res) {
  Promotion.find({ isActive: true })
    .select({
      promotionName: 1,
      _id: 1,
      url: 1,
      validDate: 1,
      images: 1,
      url: 1,
      promotionIntro: 1,
    })
    .exec((error, response) => {
      if (error) {
        console.log('Error');
      } else {
        res.status(200).json(response);
      }
    });
};
module.exports.getPromotionByType = function(req, res) {
  Promotion.find({ isActive: true, promotionLocation: req.params.id })
    .select({
      promotionName: 1,
      promotionIntro: 1,
      _id: 1,
      url: 1,
      validDate: 1,
      images: 1,
    })
    .exec((error, response) => {
      if (error) {
        console.log('Error');
      } else {
        res.status(200).json(response);
      }
    });
};
module.exports.getSinglePromotion = function(req, res, next) {
  Promotion.findById(req.params.id, (error, data) => {
    if (error) {
      console.log('Error');
    } else {
      res.status(200).json(data);
    }
  });
};
module.exports.getSinglePromotionUrl = function(req, res, next) {
  Promotion.findOne({ url: req.params.id }, (error, data) => {
    if (error) {
      console.log('Error');
    } else {
      res.status(200).json(data);
    }
  });
};
module.exports.insertPromotion = function(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    const promotion = new Promotion(req.body);
    promotion
      .save()
      .then(response => {
        res.status(201).json({
          message: 'Promotion successfully created!',
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

module.exports.updatePromotion = function(req, res, next) {
  Promotion.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log('Error');
      } else {
        res.json(data);
      }
    }
  );
};

module.exports.deletePromotion = function(req, res, next) {
  Promotion.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      console.log('Error');
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
