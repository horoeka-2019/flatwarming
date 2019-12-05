exports.up = function(knex) {
  return knex.schema.createTable("rubbishUsers", table => {
    table.increments("id");
    table.integer("usersId");
    table.string("address");
    table.string("suburb");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("rubbishUsers");
};
