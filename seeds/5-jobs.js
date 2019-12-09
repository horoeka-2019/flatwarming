exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('jobs')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        { id: 1, job: 'Cleaning' },
        { id: 2, job: 'Shopping' },
        { id: 3, job: 'Garden work' },
        { id: 4, job: 'Mopping' }
      ])
    })
}
