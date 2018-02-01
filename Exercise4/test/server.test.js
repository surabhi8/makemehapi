
const server = require('/Users/surabhigupta/makemehapi/Exercise4/solution/server.js')
const fs = require('fs')
describe('Routes',()=>{
    test('Should return right status code',(done)=>{
        const options = {
            method:'GET',
            url : '/foo/bar/baz/file.html'
        }   
        server.inject(options,(response)=>{
            expect(response.statusCode).toBe(200);
            done();
        })
       
    })
})