const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan')

require('dotenv').config();
require('./models/user');
// require('./models/change_order')
// require('./models/change_order_item')

// const User = mongoose.model("User");
// const Task = mongoose.model("Task");
// const Project = mongoose.model("Project");
// const PurchaseOrder = mongoose.model("purchaseOrder");
// const PurchaseOrderItem = mongoose.model("purchaseOrderItem");
// const Step = mongoose.model("Step");
// const ChangeOrder = mongoose.model("changeOrder");
// const ChangeOrderItem = mongoose.model("changeOrderItem");
const authenticate = require('./middleware/authenticate');
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))
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
  app.listen('5000', () => {
    console.log('server running at port 5000');
  });
