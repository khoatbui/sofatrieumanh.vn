const express = require('express')
const multer = require('multer')
const controller = require('../controllers/upload.controller')
const router = express.Router()
// SET PRODUCT
var productStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'static/images/product')
  },
  filename: function(req, file, cb) {
    console.log(file)
    cb(null, file.originalname)
  }
})
var uploadProduct = multer({ storage: productStorage })

// SET BLOGS
var blogtStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'static/images/blogs')
  },
  filename: function(req, file, cb) {
    console.log(file)
    cb(null, file.originalname)
  }
})

var uploadBlog = multer({ storage: blogtStorage })

// SET PROMOTION
var promotionStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'static/images/promotion')
  },
  filename: function(req, file, cb) {
    console.log(file)
    cb(null, file.originalname)
  }
})

var uploadPromotion = multer({ storage: promotionStorage })
router.post(
  '/upload-product-img',
  uploadProduct.any(),
  controller.uploadMultiImages
)
router.post('/upload-blog-img', uploadBlog.any(), controller.uploadMultiImages)
router.post(
  '/upload-promotion-img',
  uploadPromotion.any(),
  controller.uploadMultiImages
)
module.exports = router
