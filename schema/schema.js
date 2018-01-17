const { GraphQLSchema } = require('graphql')
const RootQueryType = require('./root_query_type')
const Mutations = require('./Mutations')

module.exports = new GraphQLSchema({
    query: RootQueryType,
    mutation: Mutations
})