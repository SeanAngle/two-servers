var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

function handleRequest1(request, response){

    response.end("I'm a badass you will want to be friends with me: " + request.url);
}

function handleRequest2(request, response){
    response.end("I am a terrible person and very negative: " + request.url);
}

server1.listen(PORT1, function() {
    console.log(`Server listening on http://localhost:${PORT1}`)
});

server2.listen(PORT2, function(){
    console.log(`Server listening on http://localhost:${PORT2}`)

});