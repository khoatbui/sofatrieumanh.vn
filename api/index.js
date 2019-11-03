require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const jsonParser = bodyParser.json({ limit: '50mb', extended: true })
const urlencodedParser = bodyParser.urlencoded({
  limit: '50mb',
  extended: true
})

const uri =
  'mongodb+srv://sofatrieumanh:trieumanh@sofatrieumanh-48lnm.mongodb.net/test?retryWrites=true&w=majority'
var mongoose = require('mongoose')
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'sofatrieumanh_db'
})
const app = express()
app.use(cookieParser())
app.use(express.static('public'))
app.use(express.static('uploads'))
app.use(cors())
app.use(jsonParser)

const blogRouter = require('./routers/blog.router')
const uploadRouter = require('./routers/upload.router')
const productRouter = require('./routers/product.router')
const characteryRouter = require('./routers/charactery.router')
const menuRouter = require('./routers/menu.router')
// const auth = require('./router/auth.routes')

// app.set('view engine', 'pug')
// app.set('views', './views')

// ↧↧↧↧↧↧↧ ****************ROUTER****************
app.use('/blogapi', blogRouter)
app.use('/uploadapi', uploadRouter)
app.use('/productapi', productRouter)
app.use('/characteryapi', characteryRouter)
app.use('/menuapi', menuRouter)

// ↥↥↥↥↥↥↥ ****************ROUTER****************
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.get('/', (req, res) => {
  res.send(`<h1 style="
    position: relative;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    font-size: 1rem;
    color: #FFF;
    background-color: #00AF66;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed;
    transform: translate(-50%, -50%);
">Dabook.vn system</h1>`)
})

module.exports = {
  path: '/api/',
  handler: app
}
