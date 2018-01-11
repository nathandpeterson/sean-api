const AlbumModel = require('../models/AlbumModel')

class AlbumController {
    static getAll(req, res, next) {
        const response = AlbumModel.getAll()
        res.status(200).json(response)
    }
    static getOne(req, res, next) {
        const response = AlbumModel.getOne(req.params.id)
        res.json(response)
    }
}

module.exports = AlbumController