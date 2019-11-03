const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')
mongoose.set('useCreateIndex', true)
let menuSchema = new Schema({
  menuName: {
    type: String,
    unique: true
  },
  menuIntro: {
    type: String,
    required: true
  },
  url: {
    type: String,
    require: true
  },
  isActive: {
    type: Boolean
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
  parentMenu: {
    type: Array,
    require: true
  }
})
menuSchema.plugin(uniqueValidator, { message: 'Url already in use.' })
module.exports = mongoose.model('Menu', menuSchema, 'menu')
