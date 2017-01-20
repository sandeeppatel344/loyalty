/**
 * Created by sandeep on 1/8/2017.
 */
var express = require("express");
var app = express();
var _ = require("lodash");
var cors = require("cors");
var bodyParser = require("body-parser");
//var dbProvier = require("postgresadaptor");
app.use(cors());
app.use(bodyParser());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var modules = ["customerregistration","shopmaster","employeeregistration"];
_(modules).forEach(function(module) {
    var router = require('./projections/' + module + '/routes/routes.js');
    var provider = require('./projections/' + module + '/dbprovider/' + 'postgressql' + '.js');
    var repo = require('./projections/' + module + '/repository/repository.js');
    repo.init(provider);
    router.init(app, repo);
});

//var port = process.env.PORT || 9111;
app.listen(9111, function() {
    console.log("Listening on " + "9111");
});
process.on('uncaughtException', function (err) {
    console.log("UNCAUGHT EXCEPTION" + err);
});
