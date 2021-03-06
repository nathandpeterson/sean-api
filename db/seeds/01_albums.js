
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('albums').del()
    .then(function () {
      // Inserts seed entries
      return knex('albums').insert([
        { id: 1, 
          name: 'owl and the rattlesnake', 
          artist: 'ae oatley', 
          imageURL: 'https://s3.us-east-2.amazonaws.com/sean-songs/images/guitar_acorn.jpeg',
          description: 'an early effort'
        },
        { id: 2, 
          name: 'cowboy hat sermons', 
          artist: 'artist name', 
          imageURL: 'https://images.unsplash.com/photo-1499242165110-131f6ccd0c9a?auto=format&fit=crop&w=750&q=80',
          description: 'beats and heat'
        },
        { id: 3, 
          name: 'magic potato', 
          artist: 'william idiot', 
          imageURL: 'https://images.unsplash.com/photo-1511441765914-190bdcb09e8a?auto=format&fit=crop&w=750&q=80',
          description: 'masterpiece theater'
        },
      ])
    }).then(() => {
        return knex.raw(
          `SELECT setval('albums_id_seq', (SELECT MAX(id) FROM albums));`
        )
      })
  }