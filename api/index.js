require('dotenv').config();
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const jsonParser = bodyParser.json({ limit: '50mb', extended: true });
const urlencodedParser = bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
});
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  connectTimeoutMS: 3000000,
  useUnifiedTopology: true,
});
const app = express();
//  origin: 'http://sofatrieumanh.com',
const corsOptions = {
  origin: '*',
  credentials: true,
};
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(cors(corsOptions));
app.use(jsonParser);

const blogRouter = require('./routers/blog.router');
const uploadRouter = require('./routers/upload.router');
const productRouter = require('./routers/product.router');
const characteryRouter = require('./routers/charactery.router');
const menuRouter = require('./routers/menu.router');
const promotionRouter = require('./routers/promotion.router');
const dictionaryRouter = require('./routers/dictionary.router');
// const auth = require('./router/auth.routes')

// app.set('view engine', 'pug')
// app.set('views', './views')

// ↧↧↧↧↧↧↧ ****************ROUTER****************

const host = process.env.API_HOST || '127.0.0.1';
const port = process.env.API_PORT || 3002;
app.use('/blogapi', blogRouter);
app.use('/uploadapi', uploadRouter);
app.use('/productapi', productRouter);
app.use('/characteryapi', characteryRouter);
app.use('/menuapi', menuRouter);
app.use('/promotionapi', promotionRouter);
app.use('/dictionaryapi', dictionaryRouter);

// ↥↥↥↥↥↥↥ ****************ROUTER****************

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.header('origin'));
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
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
">Dabook.vn system</h1>`);
});
// Listen the server
app.listen(port, host);
consola.ready({
  message: `Server listening on http://${host}:${port}`,
  badge: true,
});
