const express = require("express");

module.exports = function(server){

  //API Router
  const router = express.Router();
  //Base for all entities api
  server.use("/api", router);

  //Task API
  const taskService = require("../api/services/taskService");
  taskService.register(router, "/tasks");

  const userService = require("../api/services/userService");
  userService.register(router, "/users");

  //todo crate service for Login

}
