const SongModel = require('../models/SongModel')

class SongController {
    static async getAll(req, res, next) {
        const response = await SongModel.getAll(req.params.id)
        res.status(200).json(response)
    }
    static async getOne(req, res, next) {
        const response = await SongModel.getOne(req.params.id, req.params.songId)
        res.status(200).json(response)
    }
}

module.exports = SongController