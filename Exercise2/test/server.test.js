const server = require('/Users/surabhigupta/makemehapi/Exercise2/solution/server.js')

describe('Routes',()=>{
    test('Should return right status code',(done)=>{
        const options = {
            method:'GET',
            url : 'http://localhost:8080/Surabhi'
        }
        server.inject(options,(response)=>{
            expect(response.statusCode).toBe(200);
            done();
        })
       
    })
    test('Should return right response',(done)=>{
        const options = {
            method:'GET',
            url : 'http://localhost:8080/Surabhi'
        }
        server.inject(options,(response)=>{
            expect(response.payload).toBe('Hello Surabhi');
            done();
        })
       
    })

})