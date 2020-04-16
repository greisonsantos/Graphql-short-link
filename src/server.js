const {GraphQLServer} = require('graphql-yoga')
const path = require ('path');
const resolvers = require('./resolvers')
const mongoose = require('mongoose')
const fs = require('fs');
const morgan = require('morgan');


const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'))


mongoose.connect('mongodb://root:docker@localhost:27017/develop?authSource=admin',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
});

const server = new GraphQLServer({
   typeDefs: path.resolve(__dirname,'schemas.graphql'),
   resolvers,
})

server.use(morgan('tiny', { stream: accessLogStream }));


server.start()