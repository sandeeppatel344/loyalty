/**
 * Created by sandeep on 1/13/2017.
 */
var pg = require("pg");
var _ = require("lodash")
var connectionString = require("../configuration/configconstant")

var executeQuery = function(dbName, query,  callback){
    getConnection(dbName, function(error, client, done){
        if(error){
            callback(error);
            return;
        }
        client.query(query, function(err, result) {
            done();
            if(err) {
                callback(err);

                return console.error('error running query', err);
            }
            else{
                var r = {};
                r.data = result.rows;
                callback(null, r);
            }
        });
    });
};
exports.executeQuery = executeQuery;

var executeQueryWithParameters = function(dbName, query, params, callback){
    getConnection(dbName, function(error, client, done){
        if(error){
            callback(error);
            return;
        }
        console.log("Got connection for executing query");
        console.log(query);
        client.query(query, params,function(err, result) {
            done();
            if(err) {
                callback(err);

                return console.error('error running query', err);
            }
            else{
                var r = {};
                r.data = result.rows;
                callback(null,r);
            }
        });
    });
};



module.exports.insert = function(dbName, data, tablename,  callback)
{
    var keys = _.keys(data).join(',');
    var values = _.values(data);
    var i =0;
    var placeholders  = _.map(values, function(v){ i += 1; return "$" + i; });
    var insertStatement = "insert into " + tablename + "("+ keys +") values("+ placeholders.join(',') +")";
    console.log("Insert Statement fired : "+ insertStatement);
    console.log("values : "+values);
    executeQueryWithParameters(dbName, insertStatement, values, function(error, result) {
        if (error) {
            console.log("Error in inserting : " + error);
            callback(error);
        } else {
            console.log("Insertion Successfull: " + result);

            callback(null, result);
        }
    });
};

module.exports.update = function(dbName, where, data, tablename,  callback)
{
    data = data.$set;
    var keys = _.keys(data).join(',');
    var values = [];
    var i =0;
    var set="";

    _.forIn(data, function(value, key){
        if(where[key]) return;//Do not set keys which are present in where clause;
        i += 1;
        set = set.length > 1 ? set + "," : set;
        set  += key + " = $" + i;
        values.push(value);
    });
    var whereclause = "";
    _.forIn(where, function(value, key){
        i += 1;
        whereclause = whereclause.length > 1 ? whereclause+ " AND " : whereclause;
        whereclause  += key+ " = $" + i;
        values.push(value);
    });

    var updateStatement = "update " + tablename + " set "+ set + " where " + whereclause;

    executeQueryWithParameters(dbName, updateStatement, values,  function(error, result) {
        if (error) {
            callback(error);
        } else {
            callback(null, result);
        }
    });
};

var getConnection =  function(dbName, callback){
    console.log("Establishing connection with postgre");
    pg.connect(connectionString.POST_GRE_CONNECTION_STRING, callback);
};
