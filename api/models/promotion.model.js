const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
mongoose.set('useCreateIndex', true);
const promotionSchema = new Schema({
  promotionName: {
    type: String,
    unique: true,
  },
  promotionIntro: {
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
  images: {
    type: Array,
    require: false,
  },
  validDate: {
    type: Date,
    require: true,
  },
  promotionLocation: {
    type: String,
    require: false,
  },
});
promotionSchema.plugin(uniqueValidator, { message: 'Url already in use.' });
module.exports = mongoose.model('Promotion', promotionSchema, 'promotion');
