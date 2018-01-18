const express = require('express')
const router = express.Router()

const AlbumController = require('../controllers/AlbumController.js')
const SongController = require('../controllers/SongController.js')
const CommentController = require('../controllers/CommentController.js')
const FetchSongs = require('../models/FetchSongs.js')

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