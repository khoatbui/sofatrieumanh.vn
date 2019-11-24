const express = require('express');
const multer = require('multer');
const controller = require('../controllers/upload.controller');
const router = express.Router();
// SET PRODUCT
let productStorage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'static/images/product');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});
let uploadProduct = multer({ storage: productStorage });

// SET BLOGS
let blogtStorage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'static/images/blogs');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

let uploadBlog = multer({ storage: blogtStorage });

// SET PROMOTION
let promotionStorage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'static/images/promotion');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

let uploadPromotion = multer({ storage: promotionStorage });
router.post(
  '/upload-product-img',
  uploadProduct.any(),
  controller.uploadMultiImages
);
router.post('/upload-blog-img', uploadBlog.any(), controller.uploadMultiImages);
router.post(
  '/upload-promotion-img',
  uploadPromotion.any(),
  controller.uploadMultiImages
);
module.exports = router;
