const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
mongoose.set('useCreateIndex', true);
const productSchema = new Schema({
  productName: {
    type: String,
    unique: true,
  },
  productIntro: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  isHot: {
    type: Boolean,
  },

  isNewProduct: {
    type: Boolean,
  },
  isSaleOff: {
    type: Boolean,
  },
  isActive: {
    type: Boolean,
  },
  createBy: {
    type: String,
  },
  createDate: {
    type: Date,
    require: false,
  },
  modifyDate: {
    type: Date,
    require: false,
  },
  url: {
    type: String,
    require: false,
  },
  tags: {
    type: Array,
    require: false,
  },
  productFrontMaterial: {
    type: String,
    require: false,
  },
  productFrameMaterial: {
    type: String,
    require: false,
  },
  size: {
    type: String,
    require: false,
  },
  package: {
    type: String,
    require: false,
  },
  price: {
    type: Number,
    require: false,
  },
  oldPrice: {
    type: Number,
    require: false,
  },
  category: {
    type: Array,
    require: false,
  },
  images: {
    type: Array,
    require: false,
  },
  productCode: {
    type: String,
    require: true,
  },
  characteristics: {
    type: Array,
    require: true,
  },
  video: {
    type: String,
    require: false,
  },
  view: {
    type: Number,
    require: false,
  },
  buletPoint: {
    type: Array,
    require: false,
  },
});
productSchema.plugin(uniqueValidator, { message: 'Url already in use.' });
module.exports = mongoose.model('Product', productSchema, 'product');
