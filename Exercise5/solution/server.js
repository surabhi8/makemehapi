const Hapi =  require('hapi')
const path = require('./routes/index.js')
const Vision = require('vision')

const server = new  Hapi.Server
server.connection({
    host: 'localhost',
    port:  8080,
  });
  server.register(Vision, (err) => {
      if(err) throw err
  });
  server.route(path.api) 
    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'templates'
    });
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