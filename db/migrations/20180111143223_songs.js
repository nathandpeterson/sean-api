
exports.up = function(knex, Promise) {
    return knex.schema.createTable('songs', table => {
        table.increments()
        table.string('name').notNullable().defaultsTo('')
        table.string('artist').notNullable().defaultsTo('')
        table.string('link').notNullable().defaultsTo('')
        table.string('length').notNullable().defaultsTo('')
        table.string('imageURL').notNullable().defaultsTo('')
        table.string('description').notNullable().defaultsTo('')
        table.string('audioURL').notNullable().defaultsTo('')
        table.timestamps(true, true)
      })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('songs')
}
