/**
 * Created by sandeep on 1/8/2017.
 */
var express = require("express");
var app = express();
var _ = require("lodash");
var cors = require("cors");
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser());