const mongoose = require("mongoose");
mongoose.Promise =  global.Promise;

// module.exports = mongoose.connect("mongodb://localhost/todo");

module.exports = function(mongoUrl){
  console.log("MongoUrl: "+mongoUrl)
  mongoose.connect(`mongodb://${mongoUrl}`);
}
