const db = require('../db/knex.js')

class SongModel {
    static getAll(id){
        const promises = [db('album_song').where({album_id: id}), db('songs')]
        return Promise.all(promises)
            .then(([ids, songs]) => {
                // Add the song Ids for a particular album from join table to an array
                const albumSongIds = ids.map(obj => obj.song_id)
                // Filter all songs against the songIds from the album
                const albumSongs = songs.filter(song => {
                    return albumSongIds.includes(song.id) ? song : null
                })
                return albumSongs
            })
        
    }
    static getOne(id, songId){
        // Grab song by id, regardless of whether it is on the album
        return db('songs').where({id: songId}).first()
    }
}

module.exports = SongModel