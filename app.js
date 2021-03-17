'use strict';
require('dotenv').config();

const HTTP = require('http');

const HOSTNAME = '127.0.0.1',
    PORT = process.env.PORT || 3333;

const express = require('express'),
    app = express(),
    logger = require('morgan');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});

const indexController = require('./routes/index'),
    proxyController = require('./routes/proxy');

app.use('/', indexController);
app.use('/proxy', proxyController);

module.exports = app;
