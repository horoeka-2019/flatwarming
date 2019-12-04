exports.up = function(knex) {
  return knex.schema.createTable("expense", table => {
    table.increments("usersId");
    table.integer("powerDay");
    table.integer("waterDay");
    table.integer("wifiDay");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("expense");
};
