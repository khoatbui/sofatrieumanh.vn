const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')
mongoose.set('useCreateIndex', true)
let characterySchema = new Schema({
  characteryName: {
    type: String,
    unique: true
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
  }
})
characterySchema.plugin(uniqueValidator, { message: 'Url already in use.' })
module.exports = mongoose.model('Charactery', characterySchema, 'charactery')
