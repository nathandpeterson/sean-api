const express = require('express')
const router = express.Router()

const AlbumController = require('../controllers/AlbumController')
const SongController = require('../controllers/SongController')
const CommentController = require('../controllers/CommentController')

router.get('/', AlbumController.getAll)
router.get('/:id', AlbumController.getOne)

router.get('/:id/songs', SongController.getAll)
router.get('/:id/songs/:songId', SongController.getOne)

router.get('/:id/songs/:songId/comments', CommentController.getAll)
router.get('/:id/songs/:songId/comments/:commentId', CommentController.getOne)
router.post('/:id/songs/:songId/comments', CommentController.create)

module.exports = router