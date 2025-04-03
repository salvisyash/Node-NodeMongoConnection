const http = require("node:http");

const server = http.createServer(function(req, res){
    if(req.url === '/getSecretData'){        
        res.end("There is no Secret Data")
    }
    res.end("Hello world !")
});

server.listen(7777);