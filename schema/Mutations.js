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
                console.log('in MUTATIOn',parentValue, args)
               return CommentModel.postForSong(args)
                    .then(result => console.log(result))
            }
        }
    }

})

module.exports = Mutations