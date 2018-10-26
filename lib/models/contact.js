'use strict';

// node modules
const mongoose = require('mongoose');

// string parser
function toLower(v) {
  return v.toLowerCase();
}
// mongoose schema
const contactSchema = new mongoose.Schema({
  firstname: { type: String, set: toLower },
  lastname: { type: String, set: toLower },
  phone: { type: String, set: toLower },
  email: { type: String, set: toLower }
});

// Export Schema
module.exports = mongoose.model('Contact', contactSchema);
