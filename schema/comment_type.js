const graphql = require('graphql')
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = require('graphql')
const CommentModel = require('../models/CommentModel')
const SongModel = require('../models/SongModel')
const SongType = require('./song_type')

const CommentType = new GraphQLObjectType({
    name: 'CommentType',
    fields: () => ({
            id: { type: GraphQLID },
            user: { type: GraphQLString },
            text: { type: GraphQLString }
    })
})

module.exports = CommentType