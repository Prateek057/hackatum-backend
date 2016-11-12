var Station = require('./stationSchema');

exports.getAllLines = function(req, res){
    Station.find().distinct("line",function(err, lines) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.statusCode= 200;
        res.json(lines);
    });
};

exports.getStationById = function(req, res){
    Station.find({id: req.params.station_id }, function(err, station) {
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

    Station.find({name: req.params.station_name }, function(err, station) {
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
    Station.find({line: req.params.line_id}, function(err, station) {
        if (err) {
            console.log(errorForStack);
            res.status(500).send(err);
            return;
        }
        res.statusCode = 200;
        res.json(station);
    });
};
