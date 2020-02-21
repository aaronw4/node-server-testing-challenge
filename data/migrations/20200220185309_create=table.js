
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('cars', table => {
            table.increments();
            table.string('make', 32).notNullable();
            table.string('model', 32).notNullable();
        })
  )
};

exports.down = function(knex) {
  return (
      knex.schema
        .dropTableIfExists('cars')
  )
};
