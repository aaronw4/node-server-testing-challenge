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

function remove(id) {
    return db('cars')
        .where({id})
        .delete()
}

module.exports = {
    find,
    insert,
    update,
    remove
}