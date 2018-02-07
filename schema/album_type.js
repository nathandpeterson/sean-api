const graphql = require('graphql')
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require('graphql')
const AlbumModel = require('../models/AlbumModel')
const SongModel = require('../models/SongModel')
const SongType = require('./song_type')

const AlbumType = new GraphQLObjectType({
    name: 'AlbumType',
    fields: () => ({
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            artist: { type: GraphQLString },
            imageURL: { type: GraphQLString },
            description: { type: GraphQLString },
            songs: {
                type: new GraphQLList(SongType),
                resolve(parentValue, args) {
                    console.log('hit this',parentValue)
                    return SongModel.getByAlbum(parentValue.id)
                }
            },   
    })
})

module.exports = AlbumType
