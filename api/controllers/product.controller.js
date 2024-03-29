const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const Product = require('../models/product.model');
const Menu = require('../models/menu.model');
module.exports.getAllProducts = function(req, res) {
  Product.find()
    .select({
      productName: 1,
      _id: 1,
      createDate: 1,
      modifyDate: 1,
      isHot: 1,
      isActive: 1,
      tags: 1,
    })
    .exec((error, response) => {
      if (error) {
        console.log('Error');
      } else {
        res.status(200).json(response);
      }
    });
};

module.exports.getAllProductsList = function(req, res) {
  try {
    Product.find({ isActive: true })
      .select({
        productName: 1,
        price: 1,
        oldPrice: 1,
        _id: 1,
        images: 1,
        isNewProduct: 1,
        isSaleOff: 1,
        createDate: 1,
        isHot: 1,
        url: 1,
        characteristics: 1,
        tags: 1,
      })
      .exec((error, response) => {
        if (error) {
          console.log('Error');
        } else {
          res.status(200).json(response);
        }
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getAllProductsListByNew = function(req, res) {
  try {
    Product.find({ isActive: true, isNewProduct: true })
      .select({
        productName: 1,
        price: 1,
        oldPrice: 1,
        _id: 1,
        createDate: 1,
        isHot: 1,
        images: 1,
        isNewProduct: 1,
        isSaleOff: 1,
        url: 1,
        characteristics: 1,
        tags: 1,
      })
      .exec((error, response) => {
        if (error) {
          console.log('Error');
        } else {
          res.status(200).json(response);
        }
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getAllProductsListBySaleOff = function(req, res) {
  try {
    Product.find({ isActive: true, isSaleOff: true })
      .select({
        productName: 1,
        price: 1,
        oldPrice: 1,
        _id: 1,
        createDate: 1,
        isHot: 1,
        isNewProduct: 1,
        images: 1,
        isSaleOff: 1,
        url: 1,
        characteristics: 1,
        tags: 1,
      })
      .exec((error, response) => {
        if (error) {
          console.log('Error');
        } else {
          res.status(200).json(response);
        }
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getAllProductsListByHot = function(req, res) {
  try {
    Product.find({ isActive: true, isHot: true })
      .select({
        productName: 1,
        price: 1,
        oldPrice: 1,
        _id: 1,
        createDate: 1,
        isHot: 1,
        isNewProduct: 1,
        images: 1,
        isSaleOff: 1,
        url: 1,
        characteristics: 1,
        tags: 1,
      })
      .exec((error, response) => {
        if (error) {
          console.log('Error');
        } else {
          res.status(200).json(response);
        }
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getAllProductsListByTrend = function(req, res) {
  try {
    Product.find({ isActive: true, isHot: true, isNewProduct: true })
      .select({
        productName: 1,
        price: 1,
        oldPrice: 1,
        _id: 1,
        createDate: 1,
        isHot: 1,
        isNewProduct: 1,
        isSaleOff: 1,
        images: 1,
        url: 1,
        characteristics: 1,
        tags: 1,
      })
      .exec((error, response) => {
        if (error) {
          console.log('Error');
        } else {
          res.status(200).json(response);
        }
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getAllProductsListByCategory = function(req, res) {
  try {
    Menu.findOne({ url: req.params.id }).then(menuItem => {
      console.log(req.params.id);
      console.log(menuItem);
      Product.find({
        isActive: true,
        category: menuItem._id,
        // category: {
        //   $or: [menuItem._id, menuItem.parentMenu],
        // },
      })
        .select({
          productName: 1,
          price: 1,
          oldPrice: 1,
          _id: 1,
          createDate: 1,
          isHot: 1,
          url: 1,
          images: 1,
          characteristics: 1,
          tags: 1,
        })
        .exec((error, response) => {
          if (error) {
            console.log('Error');
          } else {
            console.log(response);
            res.status(200).json(response);
          }
        });
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getAllProductsListBySearch = function(req, res) {
  try {
    Product.find({
      productName: { $regex: req.params.keyword },
      isActive: true,
    })
      .select({
        productName: 1,
        price: 1,
        oldPrice: 1,
        _id: 1,
        createDate: 1,
        isHot: 1,
        url: 1,
        images: 1,
        characteristics: 1,
        tags: 1,
      })
      .exec((error, response) => {
        if (error) {
          console.log('Error');
        } else {
          res.status(200).json(response);
        }
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getAllProductsListByCategoryId = function(req, res) {
  try {
    Product.find({
      isActive: true,
      category: req.params.id,
    })
      .select({
        productName: 1,
        price: 1,
        oldPrice: 1,
        _id: 1,
        createDate: 1,
        isHot: 1,
        url: 1,
        images: 1,
        characteristics: 1,
        tags: 1,
      })
      .exec((error, response) => {
        if (error) {
          console.log('Error');
        } else {
          res.status(200).json(response);
        }
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getSingleProduct = function(req, res, next) {
  Product.findById(req.params.id, (error, data) => {
    if (error) {
      console.log('Error');
    } else {
      res.status(200).json(data);
    }
  });
};
module.exports.getSingleProductByUrl = function(req, res, next) {
  Product.findOne({ url: req.params.id }, (error, data) => {
    if (error) {
      console.log('Error');
    } else {
      res.status(200).json(data);
    }
  });
};
module.exports.insertProduct = function(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    const product = new Product(req.body);
    product
      .save()
      .then(response => {
        res.status(201).json({
          message: 'Product successfully created!',
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

module.exports.updateProduct = function(req, res, next) {
  Product.findByIdAndUpdate(
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

module.exports.deleteProduct = function(req, res, next) {
  Product.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      console.log('Error');
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
