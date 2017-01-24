/**
 * Created by sandeep on 1/15/2017.
 */
/**
 * Created by sandeep on 1/13/2017.
 */
var _ = require('lodash');
var postGresAdaptor = require('../../../configuration/postgresadaptor');
var async= require('async');


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

/*        function(headerResult, callback){
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

        }*/
    ], function(err){
        if (err) {
            callback(err);
        } else {
            callback(null, queryRes);
        }
    });

};


module.exports.saveShopsMaster = function(req,callback){
    var params = req.body
    var postData = {shopname:params.shopname,location:params.location,createdby:params.createdby}
    saveShopsMaster("loyalty",postData,"shopmaster",callback);
    //saveCustomer()
}
module.exports.getListOfShops = function(req,callback){
    var query = "select * from shopmaster";
    postGresAdaptor.executeQuery("loyalty",query,function(error,result){
        if(error){
            callback(error);
        }else{
            callback(null,result);
        }
    })
}