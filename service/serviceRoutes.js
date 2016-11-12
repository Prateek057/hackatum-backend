module.exports = serviceRoutes;

function serviceRoutes(passport) {

    var serviceController = require('./serviceController');
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

    router.route("/service")
        .get(serviceController.getAllService);

    return router;

}
