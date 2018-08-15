const Task = require("../models/task");

Task.methods(["get","post","put","delete"]);
Task.updateOptions({new: true, runValidators: true});

module.exports = Task;
