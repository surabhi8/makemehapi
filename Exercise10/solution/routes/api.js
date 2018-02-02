const Joi = require('joi')
module.exports ={
    path: '/login',
    method: 'POST',
    handler: function(request,reply){
        reply('login successful')
    },
    config: {
        validate: {
           payload: Joi.object({
                isGuest: Joi.boolean().required(),
                username:Joi.string().when('isGuest',{is:false,then: Joi.required()}),
                password: Joi.string().alphanum(),
                accessToken: Joi.string().alphanum()
           })
        }
    }
}
