
class AlbumModel {
    static getAll(){
        return {message: `I am in the getAll model`}
    }
    static getOne(id){
        return {message: `I am in the getOne model, getting ID ${id}`}
    }
}

module.exports = AlbumModel