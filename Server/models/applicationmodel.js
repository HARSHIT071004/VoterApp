const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  aadhar: { type: String, required: true },
  district: { type: String, required: true },
  age: { type: Number, required: true },
  category: { type: String, required: true },
  gender: String,
  mobile: String,
  email: String,
  address: String,
  skills: String,

  
  aadharCard: String,
  panCard: String,
  voterId: String,
  drivingLic: String,
  hscMarksheet: String,
  gradMarksheet: String,
  postGradMarksheet: String,
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
