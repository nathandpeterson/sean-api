const SongModel = require('../models/SongModel')

class SongController {
    static getAll(req, res, next) {
        const response = SongModel.getAll()
        res.status(200).json(response)
    }
    static getOne(req, res, next) {
        const response = SongModel.getOne(req.params.id, req.params.songId)
        res.json(response)
    }
}

module.exports = SongController