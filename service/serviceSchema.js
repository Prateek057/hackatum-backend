// Load required packages
var mongoose = require('mongoose');

// Define our station schema
var Service = new mongoose.Schema({
  id: String, //Primary key
  name: String, //WC or Supermarket or Cigarette or Klinikum
  details: String, //distance or link
  link: String //URL
});

// Export the Mongoose model
module.exports = mongoose.model('Services', Service);
