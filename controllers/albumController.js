const AlbumModel = require('../models/AlbumModel')

class AlbumController {
    static async getAll(req, res, next) {
        const response = await AlbumModel.getAll()
        res.status(200).json(response)
    }
    static async getOne(req, res, next) {
        const response = await AlbumModel.getOne(req.params.id)
        res.status(200).json(response)
    }
}

module.exports = AlbumController