const db = require('../data/db.config');

function find() {
    return db('cars')
}

function insert(car) {
    return db('cars')
        .insert(car, 'id')
}

module.exports = {
    find,
    insert,
    // update,
    // remove
}