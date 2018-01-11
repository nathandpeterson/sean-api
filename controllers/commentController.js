const CommentModel = require('../models/CommentModel')

class CommentController {
    static getAll(req, res, next) {
        const response = CommentModel.getAll()
        res.status(200).json(response)
    }
    static getOne(req, res, next) {
        const response = CommentModel.getOne(req.params.id, req.params.songId, req.params.commentId)
        res.status(200).json(response)
    }
    static create(req, res, next) {
        const response = CommentModel.create(req.params.id, req.params.songId, req.body.comment)
        res.status(201).json(response)
    }
}

module.exports = CommentController