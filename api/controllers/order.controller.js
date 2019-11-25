const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const { check, validationResult } = require('express-validator');
const Order = require('../models/order.model');

module.exports.getAllOrders = function(req, res) {
  Order.find()
    .select({
      customer: 1,
      address: 1,
      note: 1,
      totalPrice: 1,
      products: 1,
      _id: 1,
      createDate: 1,
      modifyDate: 1,
    })
    .exec((error, response) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json(response);
      }
    });
};
module.exports.insertOrder = function(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    const order = new Order(req.body);
    order
      .save()
      .then(response => {
        res.status(201).json({
          message: 'Order successfully created!',
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
module.exports.createOrder = function(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    const order = new Order(req.body);
    order
      .save()
      .then(response => {
        sendOrderEmail(
          'khoatbui.dev@gmail.com',
          'Order new',
          '<html><h1>Create order</h1></html>'
        );
        res.status(201).json({
          message: 'Order successfully created!',
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

// EMAIL
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

function sendOrderEmail(customerEmail, subject, html) {
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: customerEmail,
    subject,
    html,
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
