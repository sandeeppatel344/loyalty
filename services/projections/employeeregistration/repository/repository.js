/**
 * Created by sandeep on 1/15/2017.
 */
module.exports.init = function(provider){
    this.provider = provider;
    module.exports.saveEmployee = function(req,callback){
        this.provider.saveEmployee(req,callback)
    }
}
