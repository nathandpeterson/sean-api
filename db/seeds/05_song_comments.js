exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('song_comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('song_comments').insert([
        {id: 1, song_id: 1, user: 'mike', text: 'Great song!'},
        {id: 2, song_id: 2, user: 'frodo', text: 'Amazing!'},
        {id: 3, song_id: 3, user: 'unicorn', text: 'This album is pretty cool'},
        {id: 4, song_id: 6, user: 'me', text: 'whatever'},
        {id: 5, song_id: 5, user: 'someone', text: 'i am finally happy'},
        {id: 6, song_id: 5, user: 'nathan', text: 'the hour of love'},
        {id: 7, song_id: 5, user: 'doo-wap', text: 'another love hour'},
        {id: 8, song_id: 1, user: 'aunt jan', text: 'Cool...'},
        {id: 9, song_id: 1, user: 'old friend', text: 'I like the piano'},
        {id: 10, song_id: 2, user: 'matt', text: 'More cowbell'}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('song_comments_id_seq', (SELECT MAX(id) FROM song_comments));`
      )
    })
}
