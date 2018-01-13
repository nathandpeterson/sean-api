const db = require('../db/knex.js')

class CommentModel {
    static getAll(){
        return db('song_comments')
    }
    static getById(id){
        return db.from('song_comments').where({id})
    }

    static getAllForAlbum(album_id){
        return db('album_comments').where({album_id})
    }
    static getAllForSong(album_id, song_id){
        return db('song_comments').where({song_id})
    }
    static postForAlbum(comment) {
        return db('album_comments').insert(comment).returning('*')
    }
    static postForSong(comment) {
        return db('song_comments').insert(comment).returning('*')
    }
}

module.exports = CommentModel