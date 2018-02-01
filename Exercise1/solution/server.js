const Hapi =  require('hapi')

const server = new  Hapi.Server
server.connection({
    host: 'localhost',
    port: 8000,
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