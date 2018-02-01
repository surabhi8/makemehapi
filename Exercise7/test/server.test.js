
const server = require('/Users/surabhigupta/makemehapi/Exercise5/solution/server.js')
const fs = require('fs')
describe('Rendering templates',()=>{
    test('Should return right status code',(done)=>{
        const options = {
            method:'GET',
            url : 'http://localhost:8080?/?name=Helping&suffix=!'
        }   
        server.inject(options,(response)=>{
            expect(response.statusCode).toBe(200);
            done();
        })
       
    })
   
});