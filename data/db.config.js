const knex = require('knex');
const config = require('../knexfile');

const environment = process.env.DB_EMV || 'development';

module.exports = knex(config[environment]);