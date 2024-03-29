const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
mongoose.set('useCreateIndex', true);
const subscribeSchema = new Schema({
  email: {
    type: String,
    required: true,
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
subscribeSchema.plugin(uniqueValidator, { message: 'Url already in use.' });
module.exports = mongoose.model('Subscribe', subscribeSchema, 'subscribe');
