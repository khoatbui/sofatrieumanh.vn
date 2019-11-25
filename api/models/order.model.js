const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
mongoose.set('useCreateIndex', true);
const orderSchema = new Schema({
  customer: {
    fullName: {
      type: String,
      require: false,
    },
    email: {
      type: String,
      require: false,
    },
    phoneNumber: {
      type: String,
      require: false,
    },
  },
  address: {
    type: String,
    require: false,
  },
  comment: {
    type: String,
    require: false,
  },
  totalPrice: {
    type: Number,
    require: false,
  },
  products: [],
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
orderSchema.plugin(uniqueValidator, { message: 'Url already in use.' });
module.exports = mongoose.model('Order', orderSchema, 'order');
