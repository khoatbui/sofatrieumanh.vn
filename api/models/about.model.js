const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
mongoose.set('useCreateIndex', true);
let aboutSchema = new Schema({
  aboutName: {
    type: String,
    unique: true,
  },
  aboutIntro: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
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
  images: {
    type: Array,
    require: false,
  },
});
aboutSchema.plugin(uniqueValidator, { message: 'Url already in use.' });
module.exports = mongoose.model('About', aboutSchema, 'about');
