const express = require('express')
const router = express.Router()

const AlbumController = require('../controllers/AlbumController')
const songController = require('../controllers/songController')
const commentController = require('../controllers/commentController')

router.get('/', AlbumController.getAll)
router.get('/:id', AlbumController.getOne)

// router.get('/:id/songs', songController.getAll)
// router.get('/:id/songs/:songId', songController.getOne)

// router.get('/:id/songs/:songId/comments', commentController.getAll)
// router.get('/:id/songs/:songId/comments/:commentId', commentController.getOne)
// router.post('/:id/songs/:songId/comments', commentController.create)

module.exports = router