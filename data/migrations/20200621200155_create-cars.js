
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.text('vin', 17).unique().notNullable();
      tbl.text('make', 32).notNullable();
      tbl.text('model', 32).notNullable();
      tbl.decimal('mileage').notNullable();
      tbl.text('transmission_type', 32);
      tbl.text('title_status', 32);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.scheme.dropTableIfExists('cars');
  };
  