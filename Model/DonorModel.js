const mongoose = require("mongoose");

const donorSchema = mongoose.Schema({
  firstName: { type: String ,required:true},
  lastName: String,
  gender: String,
  email: String,
  phoneNumber: String,
  address: String,
  bloodGroup: String,
});

const donorModel = mongoose.model("donors", donorSchema);

module.exports = { donorModel };
