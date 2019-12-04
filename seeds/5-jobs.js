exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("jobs")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("jobs").insert([
        { id: 1, usersId: 1, job: "rowValue1", names: "rowValue1" },
        { id: 2, usersId: 2, job: "rowValue2", names: "rowValue2" },
        { id: 3, usersId: 3, job: "rowValue3", names: "rowValue3" }
      ]);
    });
};
