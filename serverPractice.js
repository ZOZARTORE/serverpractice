var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequestS1(request,response){
	response.end("You are not a total scrub."+ request.url);
};
var server1 = http.createServer(handleRequestS1);
server1.listen(PORT1, function(){
	console.log("Our server is avaliable at http://localhost:"+PORT1);
});

function handleRequestS2(request,response){
	response.end("You are a fat scrub lord."+ request.url);
};
var server2 = http.createServer(handleRequestS2);
server2.listen(PORT2, function(){
	console.log("Our server is avaliable at http://localhost:"+PORT2);
});