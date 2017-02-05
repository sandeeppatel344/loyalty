/**
 * Created by sandeep on 1/15/2017.
 */
/**
 * Created by sandeep on 1/13/2017.
 */
var _ = require('lodash');
var postGresAdaptor = require('../../../configuration/postgresadaptor');
var sms = require('../../../configuration/sendsms');
var async= require('async');
var uuid = require('uuid/v4');
var http = require('http');


var saveEmployee = function(dbName, data, tablename, callback){
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

        },function(headerResult, callback){
/*         postGresAdaptor.executeQueryWithParameters(dbName, itemQuery, queryParams, function(error, result) {
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
         });*/
            sms(data.mobile,"Thank you for registration",data.firstname,function(res){
                console.log(res);
            })
           /* http.get("http://msg.socialkart.tk/api/sendmsg.php?user=ashishbakliwal&pass=ashish123&sender=ashish&phone="+data.mobile+"&text=Thank you for Registration&priority=ndnd&stype=normal",function(res){
                callback(null, queryRes);
            },function(error){
                callback(error);
            })*/

         }
    ], function(err){
        if (err) {
            callback(err);
        } else {
            callback(null, queryRes);
        }
    });

};


module.exports.saveEmployee = function(req,callback){
    var params = req.body
    var postData = {id:uuid(),firstname:params.firstname,
        middlename:params.middlename,
        lastname:params.lastname,
        dateofbirth:params.dateofbirth,
        mobile:params.mobile,
        emailid:params.emailid,
        gender:params.gender,
        address:params.address,
        pincode:params.pincode,
        shopname:params.shop.shopname,
        shopid:params.shop.id,
         createdby:params.createdby}
    saveEmployee("loyalty",postData,"emplyeemaster",callback);
    //saveCustomer()
}
module.exports.getListOfShops = function(req,callback){

}