const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const moment = require('moment');
const { check, validationResult } = require('express-validator');
const Advisor = require('../models/advisor.model');

module.exports.getAllAdvisors = function(req, res) {
  Advisor.find()
    .exec((error, response) => {
      if (error) {
        console.log('Error')
      } else {
        res.status(200).json(response);
      }
    });
};
module.exports.getHotAdvisorAdvisors = function(req, res) {
  Advisor.find({ isHot: true })
    .exec((error, response) => {
      if (error) {
        console.log('Error')
      } else {
        res.status(200).json(response);
      }
    });
};

module.exports.getSingleAdvisor = function(req, res, next) {
  try {
    Advisor.findById(req.params.id, (error, data) => {
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
module.exports.getSingleAdvisorByUrl = function(req, res, next) {
  try {
    Advisor.findOne({ url: req.params.id }, (error, data) => {
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
module.exports.insertAdvisor = function(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    const transactionCode = generateTransactionCode();
    const advisor = new Advisor(req.body);
    advisor.transactionCode = transactionCode;
    const staffHtml = generateStaffOrder(advisor);
    advisor
      .save()
      .then(response => {
        sendOrderEmail(
          process.env.RECEIVED_EMAIL,
          `[${transactionCode}] Ban co yeu cau tu van`,
          staffHtml
        );
        res.status(201).json({
          message: 'Advisor successfully created!',
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

module.exports.updateAdvisor = function(req, res, next) {
  Advisor.findByIdAndUpdate(
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
};

module.exports.deleteAdvisor = function(req, res, next) {
  Advisor.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      console.log('Error')
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
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
function generateStaffOrder(advisor) {
  const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
  <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
  <meta content="width=device-width" name="viewport"/>
  <!--[if !mso]><!-->
  <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
  <!--<![endif]-->
  <title></title>
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css"/>
  <!--<![endif]-->
  <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }
  
      table,
      td,
      tr {
        vertical-align: top;
        border-collapse: collapse;
      }
  
      * {
        line-height: inherit;
      }
  
      a[x-apple-data-detectors=true] {
        color: inherit !important;
        text-decoration: none !important;
      }
    </style>
  <style id="media-query" type="text/css">
      @media (max-width: 640px) {
  
        .block-grid,
        .col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }
  
        .block-grid {
          width: 100% !important;
        }
  
        .col {
          width: 100% !important;
        }
  
        .col>div {
          margin: 0 auto;
        }
  
        img.fullwidth,
        img.fullwidthOnMobile {
          max-width: 100% !important;
        }
  
        .no-stack .col {
          min-width: 0 !important;
          display: table-cell !important;
        }
  
        .no-stack.two-up .col {
          width: 50% !important;
        }
  
        .no-stack .col.num4 {
          width: 33% !important;
        }
  
        .no-stack .col.num8 {
          width: 66% !important;
        }
  
        .no-stack .col.num4 {
          width: 33% !important;
        }
  
        .no-stack .col.num3 {
          width: 25% !important;
        }
  
        .no-stack .col.num6 {
          width: 50% !important;
        }
  
        .no-stack .col.num9 {
          width: 75% !important;
        }
  
        .video-block {
          max-width: none !important;
        }
  
        .mobile_hide {
          min-height: 0px;
          max-height: 0px;
          max-width: 0px;
          display: none;
          overflow: hidden;
          font-size: 0px;
        }
  
        .desktop_hide {
          display: block !important;
          max-height: none !important;
        }
      }
    </style>
  </head>
  <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
  <!--[if IE]><div class="ie-browser"><![endif]-->
  <table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td style="word-break: break-word; vertical-align: top;" valign="top">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
  <div style="background-color:transparent;">
  <div class="block-grid two-up" style="Margin: 0 auto; min-width: 320px; max-width: 620px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="310" style="background-color:transparent;width:310px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top:5px; padding-bottom:5px;"><![endif]-->
  <div class="col num6" style="max-width: 320px; min-width: 310px; display: table-cell; vertical-align: top; width: 310px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 10px; padding-left: 10px;">
  <!--<![endif]-->
  <div align="left" class="img-container left fixedwidth" style="padding-right: 0px;padding-left: 0px;">
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="left"><![endif]-->
  <div style="font-size:1px;line-height:15px"> </div><img alt="Image" border="0" class="left fixedwidth" src="http://sofatrieumanh.com/images/logo.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 58px; display: block;" title="Image" width="58"/>
  <div style="font-size:1px;line-height:15px"> </div>
  <!--[if mso]></td></tr></table><![endif]-->
  </div>
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td><td align="center" width="310" style="background-color:transparent;width:310px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top:5px; padding-bottom:5px;"><![endif]-->
  <div class="col num6" style="max-width: 320px; min-width: 310px; display: table-cell; vertical-align: top; width: 310px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 10px; padding-left: 10px;">
  <!--<![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 15px; padding-bottom: 15px; font-family: 'Times New Roman', Georgia, serif"><![endif]-->
  <div style="color:#555555;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;line-height:1.2;padding-top:15px;padding-right:0px;padding-bottom:15px;padding-left:0px;">
  <div style="font-size: 12px; line-height: 1.2; font-family: TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif; color: #555555; mso-line-height-alt: 14px;">
  <p style="font-size: 14px; line-height: 1.2; text-align: right; mso-line-height-alt: 17px; margin: 0;"><span style="color: #800000;"><strong><em>Đơn hàng số:</em></strong></span></p>
  <p style="font-size: 14px; line-height: 1.2; text-align: right; mso-line-height-alt: 17px; margin: 0;"><strong><span style="color: #800000; font-size: 14px;"><em>#${advisor.transactionCode}</em></span></strong></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 620px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="620" style="background-color:transparent;width:620px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:0px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 620px; display: table-cell; vertical-align: top; width: 620px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 15px; padding-left: 10px;" valign="top">
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #222222; width: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 620px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="620" style="background-color:transparent;width:620px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:10px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 620px; display: table-cell; vertical-align: top; width: 620px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:10px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 5px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
  <div style="color:#000000;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:5px;padding-left:10px;">
  <div style="line-height: 1.2; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 12px; color: #000000; mso-line-height-alt: 14px;">
  <p style="line-height: 1.2; text-align: center; font-size: 18px; mso-line-height-alt: 22px; margin: 0;"><span style="font-size: 18px;"><strong>Thông báo đơn hàng mới</strong></span></p>
  <p style="line-height: 1.2; text-align: center; font-size: 18px; mso-line-height-alt: 22px; margin: 0;"><span style="font-size: 18px;"><strong>SofaTrieuManh</strong></span></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 25px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
  <div style="color:#71777D;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:25px;padding-left:10px;">
  <div style="font-size: 12px; line-height: 1.2; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; color: #71777D; mso-line-height-alt: 14px;">
  <p style="font-size: 14px; line-height: 1.2; text-align: center; mso-line-height-alt: 17px; margin: 0;">Email thông báo đơn hàng</p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid mixed-two-up" style="Margin: 0 auto; min-width: 320px; max-width: 620px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #000000;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#000000;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px"><tr class="layout-full-width" style="background-color:#000000"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="413" style="background-color:#000000;width:413px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
  <div class="col num8" style="display: table-cell; vertical-align: top; min-width: 320px; max-width: 408px; width: 413px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
  <div style="color:#FFFFFF;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px;">
  <div style="font-size: 12px; line-height: 1.2; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; color: #FFFFFF; mso-line-height-alt: 14px;">
  <p style="font-size: 14px; line-height: 1.2; mso-line-height-alt: 17px; margin: 0;">SẢN PHẨM</p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td><td align="center" width="206" style="background-color:#000000;width:206px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
  <div class="col num4" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 204px; width: 206px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
  <div style="color:#FFFFFF;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px;">
  <div style="font-size: 12px; line-height: 1.2; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; color: #FFFFFF; mso-line-height-alt: 14px;">
  <p style="font-size: 14px; line-height: 1.2; mso-line-height-alt: 17px; margin: 0;"><span style="font-size: 14px;">GIÁ</span></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid mixed-two-up" style="Margin: 0 auto; min-width: 320px; max-width: 620px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #000000;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#000000;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px"><tr class="layout-full-width" style="background-color:#000000"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="413" style="background-color:#000000;width:413px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
  <div class="col num8" style="display: table-cell; vertical-align: top; min-width: 320px; max-width: 408px; width: 413px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
  <div style="color:#FFFFFF;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px;">
  <div style="font-size: 12px; line-height: 1.2; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; color: #FFFFFF; mso-line-height-alt: 14px;">
  <p style="font-size: 14px; line-height: 1.2; mso-line-height-alt: 17px; margin: 0;">KHÁCH HÀNG</p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td><td align="center" width="206" style="background-color:#000000;width:206px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
  <div class="col num4" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 204px; width: 206px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
  <div style="color:#FFFFFF;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px;">
  <div style="font-size: 12px; line-height: 1.2; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; color: #FFFFFF; mso-line-height-alt: 14px;">
  <p style="font-size: 14px; line-height: 1.2; mso-line-height-alt: 17px; margin: 0;"><span style="font-size: 14px;"></span></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
    <div class="block-grid mixed-two-up" style="Margin: 0 auto; min-width: 320px; max-width: 620px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #FFFFFF;">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color:#FFFFFF;">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px"><tr class="layout-full-width" style="background-color:#FFFFFF"><![endif]-->
    <!--[if (mso)|(IE)]><td align="center" width="413" style="background-color:#FFFFFF;width:413px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:0px;"><![endif]-->
    <div class="col num8" style="display: table-cell; vertical-align: top; min-width: 320px; max-width: 408px; width: 413px;">
    <div style="width:100% !important;">
    <!--[if (!mso)&(!IE)]><!-->
    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
    <!--<![endif]-->
    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
    <div style="color:#000000;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px;">
    <div style="font-size: 12px; line-height: 1.2; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; color: #000000; mso-line-height-alt: 14px;">
    <p style="font-size: 14px; line-height: 1.2; mso-line-height-alt: 17px; margin: 0;"><span style="color: #000000; font-size: 14px;"><a href="https://sofatrieumanh.com" style="text-decoration: none; color: #000000;" target="_blank">Họ tên: ${advisor.fullName}</a></span></p>
    </div>
    </div>
    <!--[if mso]></td></tr></table><![endif]-->
    <!--[if (!mso)&(!IE)]><!-->
    </div>
    <!--<![endif]-->
    </div>
    </div>
    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    <!--[if (mso)|(IE)]></td><td align="center" width="206" style="background-color:#FFFFFF;width:206px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:0px;"><![endif]-->
    <div class="col num4" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 204px; width: 206px;">
    <div style="width:100% !important;">
    <!--[if (!mso)&(!IE)]><!-->
    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
    <!--<![endif]-->
    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
    <div style="color:#000000;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px;">
    <div style="font-size: 12px; line-height: 1.2; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; color: #000000; mso-line-height-alt: 14px;">
    <p style="font-size: 14px; line-height: 1.2; mso-line-height-alt: 17px; margin: 0;">Email: ${advisor.email}</p>
    </div>
    </div>
    <!--[if mso]></td></tr></table><![endif]-->
    <!--[if (!mso)&(!IE)]><!-->
    </div>
    <!--<![endif]-->
    </div>
    </div>
    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
    </div>
    </div>
    </div>
    <div style="background-color:transparent;">
    <div class="block-grid mixed-two-up" style="Margin: 0 auto; min-width: 320px; max-width: 620px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #FFFFFF;">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color:#FFFFFF;">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px"><tr class="layout-full-width" style="background-color:#FFFFFF"><![endif]-->
    <!--[if (mso)|(IE)]><td align="center" width="413" style="background-color:#FFFFFF;width:413px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:0px;"><![endif]-->
    <div class="col num8" style="display: table-cell; vertical-align: top; min-width: 320px; max-width: 408px; width: 413px;">
    <div style="width:100% !important;">
    <!--[if (!mso)&(!IE)]><!-->
    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
    <!--<![endif]-->
    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
    <div style="color:#000000;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px;">
    <div style="font-size: 12px; line-height: 1.2; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; color: #000000; mso-line-height-alt: 14px;">
    <p style="font-size: 14px; line-height: 1.2; mso-line-height-alt: 17px; margin: 0;">Địa chỉ: ${advisor.phoneNumber}</p>
    </div>
    </div>
    <!--[if mso]></td></tr></table><![endif]-->
    <!--[if (!mso)&(!IE)]><!-->
    </div>
    <!--<![endif]-->
    </div>
    </div>
    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    <!--[if (mso)|(IE)]></td><td align="center" width="206" style="background-color:#FFFFFF;width:206px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:0px;"><![endif]-->
    <div class="col num4" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 204px; width: 206px;">
    <div style="width:100% !important;">
    <!--[if (!mso)&(!IE)]><!-->
    <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
    <!--<![endif]-->
    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
    <div style="color:#000000;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px;">
    <div style="font-size: 12px; line-height: 1.2; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; color: #000000; mso-line-height-alt: 14px;">
    <p style="font-size: 14px; line-height: 1.2; mso-line-height-alt: 17px; margin: 0;">Đơn hàng: #${advisor.request}</p>
    </div>
    </div>
    <!--[if mso]></td></tr></table><![endif]-->
    <!--[if (!mso)&(!IE)]><!-->
    </div>
    <!--<![endif]-->
    </div>
    </div>
    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
    </div>
    </div>
    </div>
  <div style="background-color:transparent;">
  <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 620px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="620" style="background-color:transparent;width:620px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 620px; display: table-cell; vertical-align: top; width: 620px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px dotted #CCCCCC; width: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 620px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="620" style="background-color:transparent;width:620px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:5px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 620px; display: table-cell; vertical-align: top; width: 620px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 15px; padding-right: 10px; padding-bottom: 15px; padding-left: 10px;" valign="top">
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px dotted #CCCCCC; width: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 620px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="620" style="background-color:transparent;width:620px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:0px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 620px; display: table-cell; vertical-align: top; width: 620px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <table cellpadding="0" cellspacing="0" class="social_icons" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td style="word-break: break-word; vertical-align: top; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px;" valign="top">
  <table activate="activate" align="center" alignment="alignment" cellpadding="0" cellspacing="0" class="social_table" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: undefined; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" to="to" valign="top">
  <tbody>
  <tr align="center" style="vertical-align: top; display: inline-block; text-align: center;" valign="top">
  <td style="word-break: break-word; vertical-align: top; padding-bottom: 5px; padding-right: 3px; padding-left: 3px;" valign="top"><a href="https://www.facebook.com/SANXUATSOFA.TM" target="_blank"><img alt="Facebook" height="32" src="http://sofatrieumanh.com/images/icon/facebook-50.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;" title="Facebook" width="32"/></a></td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 15px; padding-right: 10px; padding-bottom: 15px; padding-left: 10px;" valign="top">
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px dotted #CCCCCC; width: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 620px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:620px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="620" style="background-color:transparent;width:620px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 620px; display: table-cell; vertical-align: top; width: 620px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
  <div style="color:#555555;font-family:'Lato', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
  <div style="font-size: 12px; line-height: 1.2; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; color: #555555; mso-line-height-alt: 14px;">
  <p style="font-size: 12px; line-height: 1.2; text-align: center; mso-line-height-alt: 14px; margin: 0;"><span style="font-size: 12px;">Copyright © 2019 SofaTrieuManh.com. </span><br/><span style="font-size: 12px;">You subscribed to our newsletter via our website, <a href="sofatrieumanh.com" rel="noopener noreferrer" style="text-decoration: underline; color: #71777D;" target="_blank">sofatrieumanh.com</a></span></p>
  <p style="font-size: 14px; line-height: 1.2; text-align: center; mso-line-height-alt: 17px; margin: 0;"> </p>
  <p style="font-size: 12px; line-height: 1.2; text-align: center; mso-line-height-alt: 14px; margin: 0;"><span style="font-size: 12px;"><a href="sofatrieumanh.com" rel="noopener noreferrer" style="text-decoration: underline; color: #71777D;" target="_blank">Unsubscribe from this list</a></span></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  </td>
  </tr>
  </tbody>
  </table>
  <!--[if (IE)]></div><![endif]-->
  </body>
  </html>`;
  return html;
}
function generateTransactionCode() {
  return moment().format('YYMMDDHHmm');
}