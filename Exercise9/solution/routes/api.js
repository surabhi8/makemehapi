const Joi = require('joi')
module.exports ={
    path: '/a/path/chickens/{breed}',
    method: 'GET',
    handler: function (request,reply) {
      reply('You are validated')
    },
    config: {
        validate: {
            params: {
                breed: Joi.string().required()
            }
        }
    }  
  }
