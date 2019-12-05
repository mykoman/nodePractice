// console.log('Hi Michael');
// //File Api access
// const fs = require('fs');

// fs.writeFile('text.txt', 'username: Michael', err=>{if(err){
//     console.log(error);
// }
// else{
//     console.log('successful!');
// }})

const http = require('http');

const server = http.createServer((request, response)=>{
    response.setHeader('Content-Type', 'text/html')
    response.write('<h1>Hello Michael</h1>');
    response.end();
})

server.listen(3001);