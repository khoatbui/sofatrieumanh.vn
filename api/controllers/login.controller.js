const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const createHash = require('hash-generator');
const { check, validationResult } = require('express-validator');
const Login = require('../models/login.model');

module.exports.getAllLogins = function(req, res) {
  Login.find()
    .select({
      loginName: 1,
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

module.exports.getSingleLogin = function(req, res, next) {
  Login.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json(data);
    }
  });
};

module.exports.insertLogin = function(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    const login = new Login(req.body);
    login
      .save()
      .then(response => {
        res.status(201).json({
          message: 'Login successfully created!',
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

module.exports.updateLogin = function(req, res, next) {
  Login.findByIdAndUpdate(
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

module.exports.deleteLogin = function(req, res, next) {
  Login.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
module.exports.adminLogin = function(req, res, next) {
  console.log(req.body);
  Login.find({ email: req.body.email, password: req.body.password }).exec(
    (error, response) => {
      if (error) {
        return next(error);
      } else if (response.length > 0) {
        res.status(200).json({
          loginStatus: true,
          message: 'Login success',
        });
      } else {
        res.status(200).json({
          loginStatus: false,
          message: 'Email or password wrong',
        });
      }
    }
  );
};
module.exports.resetPass = function(req, res, next) {
  console.log(req.body);
  Login.find({ email: req.body.email }).exec((error, response) => {
    if (error) {
      return next(error);
    } else if (response.length > 0) {
      const hash = createHash(8);
      Login.updateOne({ email: req.body.email }, { resetHash: hash }, function(
        errUpdate,
        resUpdate
      ) {
        if (errUpdate) {
          return next(errUpdate);
        } else {
          sendOrderEmail(
            req.body.email,
            '[SOFATRIEUMANH.COM]Yeu cau thay doi mat khau',
            `<html>
          <h6> Truy cap link sau để reset mật khẩu admin</h6>
          <a href="http://sofatrieumanh.com/admin/reset/${hash}">http://sofatrieumanh.com/admin/reset/${hash}</a>
          </html>`
          );
          res.status(200).json({
            sendMail: true,
            message: 'Check email to reset pass',
          });
        }
      });
    } else {
      res.status(200).json({
        sendMail: false,
        message: 'Email not found',
      });
    }
  });
};
module.exports.changePassword = function(req, res, next) {
  console.log(req.body);
  Login.find({ email: req.body.email, resetHash: req.params.hash }).exec(
    (error, response) => {
      if (error) {
        return next(error);
      } else if (response.length > 0) {
        Login.updateOne(
          { email: req.body.email },
          { password: req.body.password, resetHash: 'finish0#%^@2019!' },
          function(errUpdate, resUpdate) {
            if (errUpdate) {
              return next(errUpdate);
            } else {
              res.status(200).json({
                changePasswordStatus: true,
                message: 'Change password success',
              });
            }
          }
        );
      } else {
        res.status(200).json({
          changePasswordStatus: false,
          message: 'Email not found',
        });
      }
    }
  );
};
// EMAIL
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
function sendOrderEmail(customerEmail, subject, html) {
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: customerEmail,
    subject,
    html,
  };
  console.log(process.env.EMAIL_ADDRESS);
  console.log(process.env.EMAIL_PASSWORD);
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
