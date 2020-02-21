const express = require('express');
const cors = require('cors');

const carsRouter = require('./cars/carsRouter');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/cars', carsRouter);

module.exports = server;