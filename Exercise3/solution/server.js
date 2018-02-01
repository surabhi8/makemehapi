
const Hapi =  require('hapi')
const path = require('./routes/index.js')
const Inert = require('inert');
const server = new  Hapi.Server
server.connection({
    host: 'localhost',
    port: 8080,
  });

server.register(Inert, function () {});

server.route(path.api)

if(!module.parent){
    server.start ( (err) => {
        if(err){
            throw err;
        } 
        console.log("Server started")
    }
)
}

module.exports = server