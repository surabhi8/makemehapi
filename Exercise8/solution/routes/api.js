const Path = require('path')
var Rot13 = require('rot13-transform');
module.exports ={
    path: '/',
    method: 'GET',
    handler:function (request, reply) {
      var thisfile = require('fs').createReadStream(Path.join(__dirname, 'input.txt'));
      reply(thisfile.pipe(Rot13())); 
}}
