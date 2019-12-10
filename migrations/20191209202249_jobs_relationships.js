exports.up = function (knex) {
  return knex.schema.createTable('jobs_relationships', table => {
    table.increments('id')
    table.integer('usersId')
    table.integer('jobId')
    table.integer('flatmateId')
    table.string('dueDay')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('jobs_relationships')
}
