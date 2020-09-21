const http = require('http');
const port = 637;
const fs = require('fs');


function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type' : 'text/html'});
    res.writeHead(200,{'content-type' : 'stylesheet'});

    let filePath;

    switch(req.url){
        case '/':
            filePath = './resumeproject.html'
            break

        default:
            filePath = './404.html'
    }

    fs.readFile(filePath, function(err,data){
        if(err){
            console.log('error',err);
            return res.end('<h1>Error! </h1>')
        }

        return res.end(data);
    });

}

const server = http.createServer(requestHandler);

server.listen(port, function(err){
    if(err){
        console.log('error',err);
        return;
    }
    console.log("server is running on port: ", port);
});