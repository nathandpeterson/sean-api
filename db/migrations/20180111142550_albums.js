
exports.up = function(knex, Promise) {
    return knex.schema.createTable('albums', table => {
        table.increments()
        table.string('name').notNullable().defaultsTo('')
        table.string('artist').notNullable().defaultsTo('')
        table.string('imageURL').notNullable().defaultsTo('')
        table.string('description').notNullable().defaultsTo('')
        table.timestamps(true, true)
      })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('albums')
}
