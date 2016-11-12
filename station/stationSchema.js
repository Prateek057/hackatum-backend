// Load required packages
var mongoose = require('mongoose');

// Define our station schema
var Station = new mongoose.Schema({
    line: String, //U6
    id: String, //Primary key
    name: String, //Marienplatz
    // Services: String,
    services: [{
        //type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'Services'
    }]
});

// Export the Mongoose model
module.exports = mongoose.model('Stations', Station);
