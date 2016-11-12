// Load required packages
var mongoose = require('mongoose');

// Define our station schema
var Station = new mongoose.Schema({
    line: String, //U6
    id: String, //Primary key
    name: String, //Marienplatz
    Services: {
      serviceid: String, //Primary key
      name: String, //WC or Supermarket or Cigarette or Klinikum
      description: String, //distance or link
      url: String, //URL
      verified: String,
      upvote: Number,
      downvote: Number
    }
});

// Export the Mongoose model
module.exports = mongoose.model('Stations', Station);
