const CommentModel = require('../models/CommentModel')

class CommentController {
    static async getAllForAlbum(req, res, next) {
        const response = await CommentModel.getAllForAlbum(req.params.id)
        res.status(200).json(response)
    }
    static async getAllForSong(req, res, next) {
        const response = await CommentModel.getAllForSong(req.params.id, req.params.songId)
        res.status(200).json(response)
    }
    static async postForAlbum(req, res, next) {
        const comment = {album_id: req.params.id, user: req.body.user, text: req.body.text}
        const response = await CommentModel.postForAlbum(comment)
        res.status(201).json(response)
    }
    static async postForSong(req, res, next) {
        const comment = {song_id: req.params.songId, user: req.body.user, text: req.body.text}
        const response = await CommentModel.postForSong(comment)
        res.status(201).json(response)
    }
}

module.exports = CommentController

