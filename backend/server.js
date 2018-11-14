/** Package imports */
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');


/** File import */
const router = require('./controller/router.js');

/** Connect to mongoose */
mongoose.connect('mongodb://localhost:27017/einkaufsliste',{
    useNewUrlParser:true,
    useFindAndModify: false
});

/** Initialize express */
const app = express();

/** Middleware */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

/** Routes */
app.use('/', router.router);

console.log('Server is listening on', 3000);

app.listen(3000);

/** Exports */
module.exports = app;
