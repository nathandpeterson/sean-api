const express = require('express')
const router = express.Router()

const albumController = require('../controllers/albumController.js')
const songController = require('../controllers/songController.js')
const commentController = require('../controllers/commentController.js')

router.get('/albums', albumController.getAll)
router.get('/albums/:id', albumController.getOne)

router.get('/albums/:id/songs', songController.getByAlbum)
router.get('/songs', songController.getAll)
router.get('/albums/:id/songs/:songId', songController.getOne)

router.get('/albums/:id/comments', commentController.getAllForAlbum)
router.get('/albums/:id/songs/:songId/comments', commentController.getAllForSong)
router.post('/albums/:id/comments', commentController.postForAlbum)
router.post('/albums/:id/songs/:songId/comments', commentController.postForSong)

module.exports = router