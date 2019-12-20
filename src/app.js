const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const { catchErrors, gracefulShutdown, logger } = require('@banzaicloud/service-tools');


require('dotenv').config();

const middlewares = require('./middlewares/index').middleware;
const app = express();
const db = require('./db/index');

if(!db.okDB){
  // catch all uncaught exceptions and unhandled promise rejections and exit application
  catchErrors([db.shutdown]);
  // gracefully handle application stop
  gracefulShutdown([db.shutdown]);
}

const authRoute = require('./routes/auth');

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/' , (req , res) =>{
  res.json({
    message: 'DevBit Server'
  });
});

app.use('/api/v1/user' , authRoute);
app.use(middlewares);

module.exports = app;