const server = require('/Users/surabhigupta/makemehapi/Exercise10/solution/server.js')

describe('Validation  using joi OBJECT',()=>{
    test('Should return right status code',(done)=>{
        const options = {
            method:'POST',
            url : '/login',
            payload: JSON.stringify({isGuest:false,username:'hmp'})
        }
        server.inject(options,(response)=>{
            expect(response.statusCode).toBe(200);
            done();
        })
       
    })

})