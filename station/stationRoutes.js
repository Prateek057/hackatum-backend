module.exports = stationRoutes;

function stationRoutes(passport) {

    var stationController = require('./stationController');
    var router = require('express').Router();
    var unless = require('express-unless');

    /*
    * Routes Required
    * 1) Get All Patterns
    * 2) Get Pattern By Id
    * 3) Get Pattern By Name
    * */

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    router.route("/line")
        .get(stationController.getAllLines);

    router.route("/station/byId/:line_id")
        .get(stationController.getStationByLine)
        .put(stationController.putStation);

    router.route("/station/byId/:station_id")
        .get(stationController.getStationById)
        .put(stationController.putStation);

    router.route("/station/byName/:station_name")
        .get(stationController.getStationByName);


    return router;

}
