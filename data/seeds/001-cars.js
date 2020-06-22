
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del().truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, vin: '1ASKDASDU1834KD4S', make: 'Nissan', model: 'Altima', mileage: 12234},
        {id: 2, vin: '1ASKDASDU1834KF3S', make: 'Mars', model: 'Zigmarl', mileage: 666},
        {id: 3, vin: '1ASKDASDU1845KD4S', make: 'Mazda', model: 'Buttsavage', mileage: 3453, transmission_type: 'manual', title_status: 'clean'}
      ]);
    });
};
