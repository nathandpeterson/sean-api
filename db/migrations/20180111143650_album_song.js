
exports.up = function(knex, Promise) {
    return knex.schema.createTable('album_song', (table) => {
        table.integer('album_id').notNullable()
        table.integer('song_id').notNullable()
        table.foreign('song_id').references('songs.id')
        table.foreign('album_id').references('albums.id')
      })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('album_song')
}
