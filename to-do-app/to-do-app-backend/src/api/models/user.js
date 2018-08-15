const restful = require("node-restful");
const mongoose = restful.mongoose;

const UserSchema =  new mongoose.Schema(
  {
    login: { type: String, required: true },
    password: { type: String, required: true },
    active: { type: Boolean, required: true, default: true },
    createdAt: { type: Date, default: Date.now },
  }
)

module.exports = restful.model("User", UserSchema);
