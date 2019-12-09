exports.up = function (knex) {
  return knex.schema.createTable('jobs', table => {
    table.increments('id')
    table.string('job')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('jobs')
}
