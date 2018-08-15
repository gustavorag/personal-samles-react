const axios = require('axios');

//Constants to help logical process over data
const format = "json";
const endPoint = "http://localhost:3033/api/";
const loginPath = "users/"
const tasksPath = "tasks/"

var _doLogin = function(email, password, callback){

  const options = {
    headers: {
      'email': email,
      'password': password
    },
  }

  axios.post(endPoint, options)
  .then(function(response){

    var data = response.data;

    callback(null, data);
  }).catch(function(error){
    callback(error, null);
  });
}

var _getTasks = function(id, callback){

  var email = "my@gmail";
  var password = "myPass";

  var options = {
    headers: {
      'auth-email': email,
      'auth-token': password
    },
  }

  const finalUrl = endPoint+tasksPath;
  if(id){
    options.params = {
      id: id
    }
  }

  axios.get(finalUrl, options)
  .then(function(response){
    var data = response.data;
    callback(null, data);
  }).catch(function(error){
    console.log("error:"+error)
    callback(error, null);
  });
}

var _postTask = function(task, callback){

  var email = "my@gmail";
  var password = "myPass";

  const options = {
    headers: {
      'auth-email': email,
      'auth-token': password
    },
  }

  const finalUrl = endPoint+tasksPath;

  console.log("Posting Task",task);
  axios.post(finalUrl, task, options)
  .then(function(response){
    var data = response.data;
    callback(null, data);
  }).catch(function(error){
    console.log("Error on posting :"+error)
    callback(error, null);
  });
}

var _updateTask = function(task, callback){

  var email = "my@gmail";
  var password = "myPass";

  const options = {
    headers: {
      'auth-email': email,
      'auth-token': password
    },
  }

  var finalUrl = endPoint+tasksPath+task._id;

  console.log("Updating Task",task);
  axios.put(finalUrl, task, options)
  .then(function(response){
    var data = response.data;
    callback(null, data);
  }).catch(function(error){
    console.log("Error on posting :"+error)
    callback(error, null);
  });
}

var _deleteTask = function(task, callback){

  var email = "my@gmail";
  var password = "myPass";

  const options = {
    headers: {
      'auth-email': email,
      'auth-token': password
    },
  }

  const finalUrl = endPoint+tasksPath;
  finalUrl+"/"+task._id

  console.log("Deleting Task",task);
  axios.delete(finalUrl, task, options)
  .then(function(response){
    var data = response.data;
    callback(null, data);
  }).catch(function(error){
    console.log("Error on posting :"+error)
    callback(error, null);
  });
}


var api = {
  doLogin : _doLogin,
  getTasks : _getTasks,
  postTask: _postTask,
  updateTask: _updateTask,
  deleteTask: _deleteTask,
}

export default api;
