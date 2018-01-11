
exports.up = function(knex, Promise) {
    return knex.schema.createTable('album_comments', (table) => {
        table.increments()
        table.integer('album_id').notNullable()
        table.foreign('album_id').references('albums.id')
        table.string('user').notNullable().defaultsTo('')
        table.text('text').notNullable().defaultsTo('')
        table.timestamps(true, true)
    })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('album_comments')
}
