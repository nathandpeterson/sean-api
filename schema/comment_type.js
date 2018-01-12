const graphql = require('graphql')
const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')
const CommentModel = require('../models/CommentModel')
const SongModel = require('../models/SongModel')
const SongType = require('./song_type')

const CommentType = new GraphQLObjectType({
    name: 'CommentType',
    fields: () => ({
            id: { type: GraphQLID },
            user: { type: GraphQLString },
            text: { type: GraphQLString },
            song_id: { type: GraphQLID}
    })
})

module.exports = CommentType