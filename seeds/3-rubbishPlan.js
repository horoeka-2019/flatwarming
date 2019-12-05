exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("rubbishPlan")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("rubbishPlan").insert([
        { id: 1, suburb: "suburb1", dayOfWeek: "day1" },
        { id: 2, suburb: "suburb2", dayOfWeek: "day2" },
        { id: 3, suburb: "suburb3", dayOfWeek: "day3" }
      ]);
    });
};
