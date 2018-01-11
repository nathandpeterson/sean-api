
class CommentModel {
    static getAll(){
        return {message: `I am in the getComment model`}
    }
    static getOne(id, songId){
        return {message: `I am in the getOneComment model, getting album ${id}, song ${songId}, comment: ${comment}`}
    }
    static create(id, songId, comment) {
        return {message: `I am in the getOneComment model, getting album ${id}, song ${songId}, comment: ${comment}`}
    }
}

module.exports = CommentModel