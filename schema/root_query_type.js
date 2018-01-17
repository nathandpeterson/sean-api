const graphql = require('graphql')
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLID, GraphQLNonNull } = require('graphql')
const AlbumType = require('./album_type')
const SongType = require('./song_type')
const CommentType = require('./comment_type')
const AlbumModel = require('../models/AlbumModel')
const SongModel = require('../models/SongModel.js')
const CommentModel = require('../models/CommentModel')

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        albums: {
            type: new GraphQLList(AlbumType),
            resolve(parentValue, args){
                return AlbumModel.getAll()
            }
        },
        album: {
            type: AlbumType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) }},
            resolve(parentValue, args){
                return AlbumModel.getOne(args.id)
            }
        },
        songs: {
            type: new GraphQLList(SongType),
            resolve(parentValue, args) {
                return SongModel.getAll()
            }
        },
        song: {
            type: SongType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) }},
            resolve(parentValue, args){
                return SongModel.getById(args.id)
            }
        },
        comments: {
            type: new GraphQLList(CommentType),
            resolve(parentValue, args){
                return CommentModel.getAll()
            }
        },
        comment: {
            type: CommentType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) }},
            resolve(parentValue, args){
                return CommentModel.getAllForSong(null, args.id)
            }
        }
    })
})

module.exports = RootQuery