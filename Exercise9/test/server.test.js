const server = require('/Users/surabhigupta/makemehapi/Exercise9/solution/server.js')

describe('Validation',()=>{
    test('Should return right status code',(done)=>{
        const options = {
            method:'GET',
            url : '/a/path/chickens/breed'
        }
        server.inject(options,(response)=>{
            expect(response.statusCode).toBe(200);
            done();
        })
       
    })
    test('Should return right response',(done)=>{
        const options = {
            method:'GET',
            url : '/a/path/chickens/breed'
        }
        server.inject(options,(response)=>{
            expect(response.result).toMatch('You are validated');
            done();
        })
       
    })

})