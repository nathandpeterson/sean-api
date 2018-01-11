
exports.seed = function(knex, Promise) {
  
  return knex('album_song').del()
    .then(() => knex('albums').del())
    .then(() => knex('album_comments').del())
    .then(() => knex('song_comments').del())
    .then(() => knex('songs').del())
}
