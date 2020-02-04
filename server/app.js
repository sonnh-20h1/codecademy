//Define dependences
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');
// const MongoClient = require('mongodb').MongoClient;
// const db = MongoClient.connect(config_CONDITIONAL_LOGIC.DB_HOST);

//Content
const app = express();

//Import file routes config
const projectRouter = require('./app/routes/project.route');

// Connecting to the database
// mongoose.Promise = global.Promise;
mongoose.connect(config.MONGO_URL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//Middlewares
/**
 * Set up morgan
 */
app.use(logger('dev'));

/**
 * Set up boyParser
 */
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(express.json());       // to support JSON-encoded bodies


//Router

app.use('/project', projectRouter);

// @Error/404 and forward to error  handle
app.use((req, res, next) => {
    const err = Error("Not found!!");
    err.status = 404;
    next(err);
});

// @Error/500 handle function
app.use((req, res, next) => {
    const error = app.get('env') === 'development' ? err : {}
    const status = err.status || 500;
    res.status(status).json({
        error: {
            message: error.message
        }
    })
})

//Module exports
module.exports = app;