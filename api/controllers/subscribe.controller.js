const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const Subscribe = require('../models/subscribe.model');

module.exports.getAllSubscribe = function(req, res) {
  Subscribe.find()
    .select({
      subscribeName: 1,
      _id: 1,
      createDate: 1,
      modifyDate: 1,
      isHot: 1,
      isActive: 1,
      url: 1,
      subscribeIntro: 1,
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
module.exports.getHotSubscribeSubscribe = function(req, res) {
  Subscribe.find({ isHot: true })
    .select({
      subscribeName: 1,
      _id: 1,
      createDate: 1,
      modifyDate: 1,
      isHot: 1,
      isActive: 1,
      url: 1,
      subscribeIntro: 1,
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

module.exports.getSingleSubscribe = function(req, res, next) {
  try {
    Subscribe.findById(req.params.id, (error, data) => {
      if (error) {
        console.log('Error');
      } else {
        res.status(200).json(data);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getSingleSubscribeByUrl = function(req, res, next) {
  try {
    Subscribe.findOne({ url: req.params.id }, (error, data) => {
      if (error) {
        console.log('Error');
      } else {
        res.status(200).json(data);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports.insertSubscribe = function(req, res, next) {
  const errors = validationResult(req);
  console.log(req.body);
  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    const subscribe = new Subscribe(req.body);
    subscribe
      .save()
      .then(response => {
        res.status(201).json({
          message: 'Subscribe successfully created!',
          result: response,
        });
      })
      .catch(error => {
        res.status(500).json({
          'Email đã được đăng kí!',
        });
      });
  }
};

module.exports.updateSubscribe = function(req, res, next) {
  Subscribe.findByIdAndUpdate(
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

module.exports.deleteSubscribe = function(req, res, next) {
  Subscribe.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      console.log('Error');
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
