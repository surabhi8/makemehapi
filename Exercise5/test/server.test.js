
const server = require('/Users/surabhigupta/makemehapi/Exercise5/solution/server.js')
const fs = require('fs')
describe('Rendering templates',()=>{
    test('Should return right status code',(done)=>{
        const options = {
            method:'GET',
            url : 'http://localhost:8080?name=Handling'
        }   
        server.inject(options,(response)=>{
            expect(response.statusCode).toBe(200);
            done();
        })
       
    })
    test('Invalid request',(done)=>{
        const options = {
            method:'GET',
            url : '/dwdsd'
        }   
        server.inject(options,(response)=>{
            expect(response.statusCode).toBe(404);
            done();
        });
        })
        test('Should return right response',(done)=>{
            const options = {
                method:'GET',
                url : 'http://localhost:8080?name=Handling'
            }   
            let result = fs.readFileSync('/Users/surabhigupta/makemehapi/Exercise5/solution/templates/expected.html')
            server.inject(options,(response)=>{
                expect(response.result).toBe(result.toString());
                done();
            })
});
});