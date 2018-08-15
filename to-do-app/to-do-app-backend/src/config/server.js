const bodyParser = require("body-parser");
const express = require("express");
const server = express();
const allowCors = require("./cors")
const userValidation = require("./validateUser")

// server.use(bodyParser.urlencoded({extended:true}));
// server.use(bodyParser.json());
// server.use(allowCors);
//
// server.listen(port, function(){
//   console.log("Backend is running on port ["+port+"]");
// });
//
// module.exports = server;
module.exports = function(serverPort){

  server.use(bodyParser.urlencoded({extended:true}));
  server.use(bodyParser.json());
  server.use(allowCors);
  server.use(userValidation);

  server.listen(serverPort, function(){
    console.log("Backend is running on port ["+serverPort+"]");
  });

  return server;
}
