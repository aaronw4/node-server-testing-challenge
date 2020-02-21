const db = require('../data/db.config');

function find() {
    return db('cars')
}

function insert(car) {
    return db('cars')
        .insert(car, 'id')
}

function update(car, id) {
    return db('cars')
        .where({id})
        .update(car) 
}

module.exports = {
    find,
    insert,
    update,
    // remove
}