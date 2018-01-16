
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        { id: 1, 
          name: 'when i was human', 
          artist: 'ae oatley', 
          imageURL: 'www.google.com',
          link: '1XYq_lVO5fZprcNNIfgaALDm-FnJke4u4',
          length: '3:07',
          description: 'an early effort'
        },
        { id: 2, 
          name: 'hands', 
          artist: 'ae oatley', 
          imageURL: 'www.google.com',
          link: 'www.googleAPI.com',
          length: '3:07',
          description: 'why not'
        },
        { id: 3, 
          name: 'be careful', 
          artist: 'ae oatley', 
          imageURL: 'www.google.com',
          link: 'www.googleAPI.com',
          length: '3:15',
          description: 'this is real'
        },
        { id: 4, 
          name: 'out of your head', 
          artist: 'ae oatley', 
          imageURL: 'www.google.com',
          link: 'www.googleAPI.com',
          length: '10:29',
          description: 'please dont stop it'
        },
        { id: 5, 
          name: "there's nothing wrong", 
          artist: 'ae oatley', 
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
          name: 'local distortion', 
          artist: 'silas flannery', 
          imageURL: 'www.google.com',
          link: 'www.googleAPI.com',
          length: '4:01',
          description: 'do-hickey do wah wah'
        },
        { id: 8, 
          name: 'giant bugs', 
          artist: 'ae oatley', 
          imageURL: 'www.google.com',
          link: '1XYq_lVO5fZprcNNIfgaALDm-FnJke4u4',
          length: '3:07',
          description: 'an early effort'
        },
        { id: 9, 
          name: 'gulliver', 
          artist: 'ae oatley', 
          imageURL: 'www.google.com',
          link: 'www.googleAPI.com',
          length: '3:07',
          description: 'why not'
        },
        { id: 10, 
          name: 'excel spreadsheets are ugly', 
          artist: 'ae oatley', 
          imageURL: 'www.google.com',
          link: 'www.googleAPI.com',
          length: '3:15',
          description: 'this is real'
        },
        { id: 11, 
          name: 'clever soap hero', 
          artist: 'ae oatley', 
          imageURL: 'www.google.com',
          link: 'www.googleAPI.com',
          length: '10:29',
          description: 'please dont stop it'
        },
        { id: 12, 
          name: 'golf is not a sport', 
          artist: 'ae oatley', 
          imageURL: 'www.google.com',
          link: 'www.googleAPI.com',
          length: '1:21',
          description: 'shorty'
        },
      ])
    }).then(() => {
        return knex.raw(
          `SELECT setval('songs_id_seq', (SELECT MAX(id) FROM songs));`
        )
      })
  }
  