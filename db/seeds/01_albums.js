
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('albums').del()
    .then(function () {
      // Inserts seed entries
      return knex('albums').insert([
        { id: 1, 
          name: 'cowboyhat sermons', 
          artist: 'jonathan swift', 
          imageURL: 'www.google.com',
          description: 'an early effort'
        },
        { id: 2, 
          name: 'smoof', 
          artist: 'alexander the pop', 
          imageURL: 'www.google.com',
          description: 'beats and heat'
        },
        { id: 3, 
          name: 'magic potato', 
          artist: 'william idiot', 
          imageURL: 'www.google.com',
          description: 'masterpiece theater'
        },
      ])
    }).then(() => {
        return knex.raw(
          `SELECT setval('albums_id_seq', (SELECT MAX(id) FROM albums));`
        )
      })
  }