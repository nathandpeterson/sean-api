
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('album_song').del()
    .then(function () {
      // Inserts seed entries
      return knex('album_song').insert([
        {album_id: 1, song_id: 1},
        {album_id: 1, song_id: 2},
        {album_id: 1, song_id: 3},
        {album_id: 1, song_id: 4},
        {album_id: 1, song_id: 5},
        {album_id: 2, song_id: 6},
        {album_id: 2, song_id: 7},
        {album_id: 2, song_id: 8},
        {album_id: 2, song_id: 9},
        {album_id: 3, song_id: 10},
        {album_id: 3, song_id: 11},
        {album_id: 3, song_id: 12},
      ])
    })
}
