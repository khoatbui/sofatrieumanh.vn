const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')
mongoose.set('useCreateIndex', true)
let advisorSchema = new Schema({
  fullName: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    require: true
  },
  phoneNumber: {
    type: String,
    require: true
  },
  request: {
    type: String,
    require: false
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
  },
  advisorStatus:{
    type: Boolean,
    require: false
  },
  advisorDetail:{
    type: String,
    require: false
  }
})
advisorSchema.plugin(uniqueValidator, { message: 'Url already in use.' })
module.exports = mongoose.model('Advisor', advisorSchema, 'advisor')
