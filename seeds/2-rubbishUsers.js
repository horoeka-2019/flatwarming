exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("rubbishUsers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("rubbishUsers").insert([
        { usersId: 1, address: "rowValue1 street", suburb: "suburb1" },
        { usersId: 2, address: "rowValue2 street", suburb: "suburb2" },
        { usersId: 3, address: "rowValue3 street", suburb: "suburb3" }
      ]);
    });
};
