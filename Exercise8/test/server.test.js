const server = require('/Users/surabhigupta/makemehapi/Exercise8/solution/server.js')

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
            expect(response.result).toBe('Gur Chefhvg bs Uncv-arff');
            done();
        })
       
    })
})