const {GraphQLServer} = require('graphql-yoga')
const path = require ('path');
const resolvers = require('./resolvers')
const mongoose = require('mongoose')

mongoose.connect('mongodb://root:docker@localhost:27017/develop?authSource=admin',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
});

const server = new GraphQLServer({
   typeDefs: path.resolve(__dirname,'schemas.graphql'),
   resolvers,
})

server.start()