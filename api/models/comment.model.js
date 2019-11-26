const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')
mongoose.set('useCreateIndex', true)
let commentSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', require: true },
  fullName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  phoneNumber: {
    type: String,
    require: false
  },
  comment: {
    type: String,
    require: false
  },
  commentDate: {
    type: Date
  },
  createBy: {
    type: String
  },
  createDate: {
    type: Date,
    require: false
  },
  modifyDate: {
    type: Date,
    require: false
  }
})
commentSchema.plugin(uniqueValidator, { message: 'Url already in use.' })
module.exports = mongoose.model('Comment', commentSchema, 'comment')
