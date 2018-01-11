
exports.up = function(knex, Promise) {
    return knex.schema.createTable('song_comments', (table) => {
        table.increments()
        table.integer('album_id').notNullable()
        table.integer('song_id').notNullable()
        table.foreign('song_id').references('songs.id')
        table.foreign('album_id').references('albums.id')
        table.string('user').notNullable().defaultsTo('')
        table.text('text').notNullable().defaultsTo('')
        table.timestamps(true, true)
      })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('song_comments')
};
