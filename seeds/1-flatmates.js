
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('flatmates').del()
    .then(function () {
      // Inserts seed entries
      return knex('flatmates').insert([
        {id: 1, usersId: 1, names: 'rowValue1'},
        {id: 2, usersId: 2, names: 'rowValue2'},
        {id: 3, usersId: 3, names: 'rowValue3'}
      ]);
    });
};
