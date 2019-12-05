exports.up = function(knex) {
    return knex.schema.createTable("flatmates", table => {
      table.increments("usersId");
      table.string("names");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("flatmates");
  };
