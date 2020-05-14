var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'content-type': 'text/html'});
    response.write('Hello World!');
    response.end();
}).listen(8888);

//localhost:8888 들어가면 볼 수 있다!
console.log('서버 돌아가는중!')