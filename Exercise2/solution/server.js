
const Hapi =  require('hapi')
const routes = require('./routes/index.js')
const server = new  Hapi.Server
server.connection({
    host: '127.0.0.1',
    port: 8080,
  });



if(!module.parent){
    server.start ( (err) => {
        if(err){
            throw err;
        } 
        console.log("Serever started")
    }
)
}

server.route(routes.api)

module.exports = server