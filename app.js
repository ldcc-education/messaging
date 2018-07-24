"use strict"

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const util = require('util');
const methodOverride = require('method-override');
const http = require('http');
const moment = require('moment-timezone');

const port = 7777;
const route = require('./route');

global.app = new express();

app.set('port', process.env.PORT || port);
app.use(compression());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
http.createServer(app).listen(app.get('port'), () => {
  console.log(util.format('[Logger]::[Process On]::[Pid:%d]::[Server Running At %d]::[%s]::[Started]',
                            process.pid,
                            port,
                            moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss')));
});

app.use(route);
