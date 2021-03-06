/**
 * Created by sandeep on 1/13/2017.
 */
var _ = require('lodash');
var postGresAdaptor = require('../../../configuration/postgresadaptor');
var async= require('async');


var saveCustomer = function(dbName, headerQuery, itemQuery, queryParams, callback){
    var queryRes = {data:{}};
    async.waterfall([
        function(callback){
            if(headerQuery){
                postGresAdaptor.executeQueryWithParameters(dbName, headerQuery, queryParams, function(error, result) {
                    if (error) {
                        callback(error);
                    } else {
                        callback(null, result);
                    }
                });
            } else{
                callback(null,{data:[{}]});
            }

        },

        function(headerResult, callback){
            postGresAdaptor.executeQueryWithParameters(dbName, itemQuery, queryParams, function(error, result) {
                if (error) {
                    callback(error);
                } else {
                    try{
                        queryRes.data.header = headerResult.data[0];
                        queryRes.data.header.items = result.data;
                        callback(null, queryRes);
                    }catch(e){

                        callback(null, queryRes);
                    }

                }
            });

        }
    ], function(err){
        if (err) {
            callback(err);
        } else {
            callback(null, queryRes);
        }
    });

};


module.exports.saveCustomer = function(req,callback){
    console.log(req)
    callback(null,{data:[]})
    //saveCustomer()
}