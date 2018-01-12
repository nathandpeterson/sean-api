const db = require('../db/knex.js')

class AlbumModel {
    static getAll(){
        return db('albums')
    }
    static getOne(id){
        return db('albums').where({id}).first()
    }
}

module.exports = AlbumModel