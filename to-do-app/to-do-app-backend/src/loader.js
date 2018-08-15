const path = require('path');
var fs = require('fs');

var configFile = path.join(__dirname,'app-config.json');
console.log('Loading configuration',configFile);

fs.readFile(configFile,'utf8', function(err, contents) {

  if(contents){

    console.log('Configuration loaded');

    var config = JSON.parse(contents);
    const server = require("./config/server")(config.server.port);
    require("./config/database")(config.database.url);
    require("./config/routes")(server);

  }else if (err){
    console.log('Error while loading the file: ', err);
  }


});
