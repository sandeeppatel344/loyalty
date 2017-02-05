/**
 * Created by sandeep on 2/5/2017.
 */
var http = require('http');
module.exports.sendSMS = function(mobilenumber,text,personname,callback){
    http.get("http://msg.socialkart.tk/api/sendmsg.php?" +
        "user=ashishbakliwal" +
        "&pass=ashish123" +
        "&sender=ashish" +
        "&phone="+mobilenumber+
        "&text="+"Hi "+personname +" "+text+
        "&priority=ndnd&stype=normal",function(res){
        callback(null, res);
    },function(error){
        callback(error);
    });
}
