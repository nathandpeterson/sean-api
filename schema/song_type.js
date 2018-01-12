const graphql = require('graphql')
const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')
const AlbumModel = require('../models/AlbumModel')

const SongType = new GraphQLObjectType({
    name: 'SongType',
    fields: () => ({
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            artist: { type: GraphQLString },
            imageURL: { type: GraphQLString },
            description: { type: GraphQLString },
            length: { type : GraphQLString}
    })
})

module.exports = SongType
