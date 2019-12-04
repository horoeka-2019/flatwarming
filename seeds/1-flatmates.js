
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('flatmates').del()
    .then(function () {
      // Inserts seed entries
      return knex('flatmates').insert([
        {usersId: 1, names: 'rowValue1'},
        {usersId: 2, names: 'rowValue2'},
        {usersId: 3, names: 'rowValue3'}
      ]);
    });
};
