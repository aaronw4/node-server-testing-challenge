
exports.seed = function(knex) {
  return knex('cars').del()
    .then(function () {
      return knex('cars').insert([
        {make: 'Ford', model: 'LTD'},
        {make: 'Geo', model: 'Metro'},
        {make: 'Honda', model: 'Fit'},
        {make: 'Mazda', model: '3'}
      ]);
    });
};
