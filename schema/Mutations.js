const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID} = require('graphql')
const CommentModel = require('../models/CommentModel')
const CommentType = require('./comment_type')

const Mutations = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addComment: {
            type: CommentType,
            args: {
                user: { type: GraphQLString },
                text: { type: GraphQLString },
                song_id: { type: GraphQLID}
            },
            resolve(parentValue, args){
               return CommentModel.postForSong(args)
                .then(res => args.song_id)
            }
        }
    }

})

module.exports = Mutations