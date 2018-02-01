
const Hapi =  require('hapi')

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
        console.log("Server started")
    }
)
}


module.exports = server