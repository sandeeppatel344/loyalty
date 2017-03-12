/**
 * Created by sandeep on 1/15/2017.
 */
/**
 * Created by sandeep on 1/13/2017.
 */
var _ = require('lodash');
var postGresAdaptor = require('../../../configuration/postgresadaptor');
var async= require('async');
var redis = require("redis");
client = redis.createClient();
var uuid = require('uuid/v4');

client.on("error",function(error){
    console.log("Redis Error"+error);
})

var saveShopsMaster = function(dbName, data, tablename, callback){
    var queryRes = {data:{}};
    async.waterfall([
        function(callback){
            if(data){
                postGresAdaptor.insert(dbName, data, tablename, function(error, result) {
                    if (error) {
                        callback(error);
                    } else {
                        callback(null, result);
                    }
                });
            } else{
                callback(null,queryRes);
            }

        }

    ], function(err){
        if (err) {
            callback(err);
        } else {
            callback(null, queryRes);
        }
    });

};

module.exports.userLogin = function(req,callback){
    var token = uuid();
    client.set(token,token)
   client.get(token,function(error,res){
       console.log(res);
       callback({"token":res})
    })
    var params = [];

}

//