exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("expense")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("expense").insert([
        { id:1,usersId: 1, powerDay: '11', waterDay: '22', wifiDay: '33' },
        { id:2,usersId: 2, powerDay: '11', waterDay: '22', wifiDay: '33' },
        { id:3,usersId: 3, powerDay: '11', waterDay: '22', wifiDay: '33' }
      ]);
    });
};
