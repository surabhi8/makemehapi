
const server = require('/Users/surabhigupta/makemehapi/Exercise4/solution/server.js')
const fs = require('fs')
let readDirFiles = require('read-dir-files');
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
    test('Should return right response',(done)=>{
        const options = {
            method:'GET',
            url : '/foo/bar/baz/file.html'
        }   
        server.inject(options,(response)=>{
            let result = fs.readFileSync('/Users/surabhigupta/makemehapi/Exercise4/solution/public/file.html')
            expect(response.result).toBe(result.toString());
            done();
        });
        })

    test('Should return right response',(done)=>{
        const options = {
            method:'GET',
            url : '/foo/bar/baz/file.html'
        }   
        server.inject(options,(response)=>{
            let result = fs.readFileSync('/Users/surabhigupta/makemehapi/Exercise4/solution/public/file.html')
            expect(response.result).toBe(result.toString());
            done();
        });
        })
        
    test('Invalid request',(done)=>{
        const options = {
            method:'GET',
            url : '/'
        }   
        server.inject(options,(response)=>{
            expect(response.statusCode).toBe(404);
            done();
        });
        })
    });