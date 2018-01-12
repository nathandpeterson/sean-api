const graphql = require('graphql')
const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')
const AlbumModel = require('../models/AlbumModel')

const AlbumType = new GraphQLObjectType({
    name: 'AlbumType',
    fields: () => ({
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            artist: { type: GraphQLString },
            imageURL: { type: GraphQLString },
            description: { type: GraphQLString }
    })
})

module.exports = AlbumType