
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('album_comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('album_comments').insert([
        {id: 1, album_id: 1, user: 'aldo pan', text: 'Great song!'},
        {id: 2, album_id: 1, user: 'hello frello', text: 'Amazing!'},
        {id: 3, album_id: 1, user: 'wiseass', text: 'This album is pretty cool'},
        {id: 4, album_id: 2, user: 'me', text: 'whatever'},
        {id: 5, album_id: 3, user: 'someone', text: 'i am finally happy'},
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('album_comments_id_seq', (SELECT MAX(id) FROM album_comments));`
      )
    })
}
