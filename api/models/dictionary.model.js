const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
mongoose.set('useCreateIndex', true);
const dictionarySchema = new Schema({
  dictionaryCode: {
    type: String,
    unique: true,
  },
  dictionaryName: {
    type: String,
    unique: true,
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
});
dictionarySchema.plugin(uniqueValidator, { message: 'Url already in use.' });
module.exports = mongoose.model('Dictionary', dictionarySchema, 'dictionary');
