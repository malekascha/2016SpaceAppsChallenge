'use strict'

const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const eonet = require('./eonet-api.js');

app.use(express.static(__dirname + '/../cesium-npm'));
app.use(morgan('dev'));

eonet.getAllEvents({
  status: 'open'
});

app.listen(port);

console.log(`Listening on port ${port}`);
