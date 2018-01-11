
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        { id: 1, 
          name: 'alphabet soup', 
          artist: 'jonathan swift', 
          imageURL: 'www.google.com',
          link: 'www.googleAPI.com',
          length: '3:07',
          description: 'an early effort'
        },
        { id: 2, 
          name: 'brexit my ass', 
          artist: 'alex', 
          imageURL: 'www.google.com',
          link: 'www.googleAPI.com',
          length: '3:07',
          description: 'why not'
        },
        { id: 3, 
          name: 'wizard romp', 
          artist: 'steve-o', 
          imageURL: 'www.google.com',
          link: 'www.googleAPI.com',
          length: '3:15',
          description: 'this is real'
        },
        { id: 4, 
          name: 'clever soap hero', 
          artist: 'augustus ceasar', 
          imageURL: 'www.google.com',
          link: 'www.googleAPI.com',
          length: '10:29',
          description: 'please dont stop it'
        },
        { id: 5, 
          name: 'golf has died', 
          artist: 'oatbird', 
          imageURL: 'www.google.com',
          link: 'www.googleAPI.com',
          length: '1:21',
          description: 'shorty'
        },
        { id: 6, 
          name: 'more data please', 
          artist: 'silas flannery', 
          imageURL: 'www.google.com',
          link: 'www.googleAPI.com',
          length: '1:21',
          description: 'graphql my heart'
        },
        { id: 7, 
          name: 'breaking sad', 
          artist: 'silas flannery', 
          imageURL: 'www.google.com',
          link: 'www.googleAPI.com',
          length: '4:01',
          description: 'do-hickey do wah wah'
        }
      ])
    }).then(() => {
        return knex.raw(
          `SELECT setval('songs_id_seq', (SELECT MAX(id) FROM songs));`
        )
      })
  }
  