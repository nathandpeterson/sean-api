const graphql = require('graphql')
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require('graphql')
const AlbumModel = require('../models/AlbumModel')
const CommentType = require('./comment_type')
const CommentModel = require('../models/CommentModel')

const SongType = new GraphQLObjectType({
    name: 'SongType',
    fields: () => ({
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            artist: { type: GraphQLString },
            imageURL: { type: GraphQLString },
            description: { type: GraphQLString },
            audioURL : { type: GraphQLString },
            length: { type : GraphQLString},
            comments: { 
                type: new GraphQLList(CommentType),
            resolve(parentValue) {
                return CommentModel.getAllForAlbum(parentValue.id)
            }}
    })
})

module.exports = SongType 