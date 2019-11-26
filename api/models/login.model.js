const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
mongoose.set('useCreateIndex', true);
const loginSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  ipLogin: {
    type: String,
  },
  lastLogin: {
    type: Date,
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
  resetHash: {
    type: String,
  },
});
loginSchema.plugin(uniqueValidator, { message: 'Url already in use.' });
module.exports = mongoose.model('Login', loginSchema, 'login');
