
const server = require('/Users/surabhigupta/makemehapi/Exercise5/solution/server.js')
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
});