const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const About = require('../models/about.model');

module.exports.getAllAbouts = function(req, res) {
  About.find()
    .select({
      aboutName: 1,
      _id: 1,
      createDate: 1,
      modifyDate: 1,
      isActive: 1,
      url: 1,
      aboutIntro: 1,
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
module.exports.getHotAboutAbouts = function(req, res) {
  About.find({ isHot: true })
    .select({
      aboutName: 1,
      _id: 1,
      createDate: 1,
      modifyDate: 1,
      isActive: 1,
      url: 1,
      aboutIntro: 1,
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

module.exports.getSingleAbout = function(req, res, next) {
  try {
    About.findById(req.params.id, (error, data) => {
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
module.exports.getSingleAboutByUrl = function(req, res, next) {
  try {
    About.findOne({ url: req.params.id }, (error, data) => {
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
module.exports.insertAbout = function(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    const about = new About(req.body);
    about
      .save()
      .then(response => {
        res.status(201).json({
          message: 'About successfully created!',
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

module.exports.updateAbout = function(req, res, next) {
  About.findByIdAndUpdate(
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

module.exports.deleteAbout = function(req, res, next) {
  About.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      console.log('Error');
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
