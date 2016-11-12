var Station = require('./stationSchema');

exports.getAllLines = function(req, res){
    Station.find(function(err, lines) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.statusCode= 200;
        res.json(lines);
    });
};

exports.getStationById = function(req, res){
    Station.find({ "id": req.params.station_id }, function(err, station) {
        if (err) {
            console.log(errorForStack);
            res.status(500).send(err);
            return;
        }
        res.json(station);
    });

};

exports.putStation = function(req, res){
    console.log("You put some station");
};

exports.getStationByName = function(req, res){
    var searchString = " { \"name\": /"+req.params.station_name+"/ }";
    Station.find(searchString, function(err, station) {
        if (err) {
            console.log(errorForStack);
            res.status(500).send(err);
            return;
        }
        res.statusCode = 200;
        res.json(station);
    });
};

exports.getStationByLine = function(req, res){
    var searchString = " { \"line\": /"+req.params.line_id+"/ }";
    Station.find(searchString, function(err, station) {
        if (err) {
            console.log(errorForStack);
            res.status(500).send(err);
            return;
        }
        res.statusCode = 200;
        res.json(station);
    });
};
