const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
require('./models/user');

const User = mongoose.model('User');
const authenticate = require('./middleware/authenticate');
app.use(cors());
app.use(express.json());
app.use(require('./routes/auth/auth'));
app.use(require('./routes/user/index'));

mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on('connected', () => {
    console.log('connected to mongo');
  });
  mongoose.connection.on('err', () => {
    console.log('error while connecting', err);
  });
  app.listen('6000', () => {
    console.log('server running at port 6000');
  });
