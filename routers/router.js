const express = require('express')
const router = express.Router()

const AlbumController = require('../controllers/AlbumController')
const SongController = require('../controllers/SongController')
const CommentController = require('../controllers/CommentController')
const FetchSongs = require('../models/FetchSongs')

router.get('/albums', AlbumController.getAll)
router.get('/albums/:id', AlbumController.getOne)

router.get('/albums/:id/songs', SongController.getByAlbum)
router.get('/songs', SongController.getAll)
router.get('/albums/:id/songs/:songId', SongController.getOne)
router.post('/test', FetchSongs.test)

router.get('/albums/:id/comments', CommentController.getAllForAlbum)
router.get('/albums/:id/songs/:songId/comments', CommentController.getAllForSong)
router.post('/albums/:id/comments', CommentController.postForAlbum)
router.post('/albums/:id/songs/:songId/comments', CommentController.postForSong)

module.exports = router