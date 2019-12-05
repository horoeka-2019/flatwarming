exports.up = function(knex) {
  return knex.schema.createTable("rubbishPlan", table => {
    table.increments("id");
    table.string("suburb");
    table.string("dayOfWeek");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("rubbishPlan");
};
