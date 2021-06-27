const mongoose = require("mongoose");

/*
 * This is a mongoose schema. Since MongoDB is NoSQL, and NoSQL implies Not-Structured (Query Language)
 * you can just throw heaps of data at it however you like. But most of the time, you'll want structure
 * to work with. A mongoose schema enforces order for the data you put in.
 */

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  displayName: { type: String },
  isAdmin: { type: Boolean, default: false, required: true},
});

module.exports = User = mongoose.model("user", userSchema);
