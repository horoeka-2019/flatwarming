exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('jobs_relationships')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs_relationships').insert([
        { id: 1, jobId: 1, usersId: 1, flatmateId: 1, dueDay: 1 }
      ])
    })
}
