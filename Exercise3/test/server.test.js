
const server = require('/Users/surabhigupta/makemehapi/Exercise3/solution/server.js')
const fs = require('fs')
describe('Routes',()=>{
    test('Should return right status code',(done)=>{
        const options = {
            method:'GET',
            url : '/'
        }   
        server.inject(options,(response)=>{
            expect(response.statusCode).toBe(200);
            done();
        })
       
    })
    test('Should return right response',(done)=>{
        const options = {
            method:'GET',
            url : '/'
        }   
        server.inject(options,(response)=>{
            let result = fs.readFileSync('/Users/surabhigupta/makemehapi/Exercise3/solution/routes/index.html')
            expect(response.result).toBe(result.toString());
            done();
        })
       
    })
})