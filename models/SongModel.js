
class SongModel {
    static getAll(){
        return {message: `I am in the getAllSong model`}
    }
    static getOne(id, songId){
        return {message: `I am in the getOneSong model, getting album ${id}, song ${songId}`}
    }
}

module.exports = SongModel