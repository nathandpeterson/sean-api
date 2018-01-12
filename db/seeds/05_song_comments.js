exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('song_comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('song_comments').insert([
        {id: 1, song_id: 1, user: 'aldo pan', text: 'Great song!'},
        {id: 2, song_id: 2, user: 'hello frello', text: 'Amazing!'},
        {id: 3, song_id: 3, user: 'wiseass', text: 'This album is pretty cool'},
        {id: 4, song_id: 6, user: 'me', text: 'whatever'},
        {id: 5, song_id: 5, user: 'someone', text: 'i am finally happy'},
        {id: 6, song_id: 5, user: 'doo-wap', text: 'the hour of love'},
        {id: 7, song_id: 5, user: 'doo-wap', text: 'another love hour'}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('song_comments_id_seq', (SELECT MAX(id) FROM song_comments));`
      )
    })
}
