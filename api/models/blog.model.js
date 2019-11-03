const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')
mongoose.set('useCreateIndex', true)
let blogSchema = new Schema({
  blogName: {
    type: String,
    unique: true
  },
  blogIntro: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  isHot: {
    type: Boolean
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
  url: {
    type: String,
    require: false
  },
  tags: {
    type: Array,
    require: false
  },
  images: {
    type: Array,
    require: false
  }
})
blogSchema.plugin(uniqueValidator, { message: 'Url already in use.' })
module.exports = mongoose.model('Blog', blogSchema, 'blog')
