module.exports = function(req, res, next){

  console.log("Validating User");

  console.log("auth-email: "+req.get("auth-email"));
  console.log("auth-token: "+req.get("auth-token"));

  if(next){
    next();
  }
}
