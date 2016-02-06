//Lets require/import the HTTP module
var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');
    var mimeTypes = {
        "html": "text/html",
        "jpeg": "image/jpeg",
        "jpg": "image/jpeg",
        "png": "image/png",
        "js": "text/javascript",
        "css": "text/css"};

//Lets define a port we want to listen to
var port = process.env.PORT || 5000;

//We need a function which handles requests and send response
function handleRequest(req, res){
  var uri = url.parse(req.url).pathname;
  var filename = path.join(process.cwd(), uri);
  fs.exists(filename, function(exists) {
    if(!exists) {
      console.log("not exists: " + filename);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('404 Not Found\n');
      res.end();
      return;
    }
    var mimeType = mimeTypes[path.extname(filename).split(".")[1]];
    res.writeHead(200, {'Content-Type':mimeType});

    var fileStream = fs.createReadStream(filename);
    fileStream.pipe(res);
  });
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(port, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", port);
});
