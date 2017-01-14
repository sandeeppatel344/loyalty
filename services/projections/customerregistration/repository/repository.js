/**
 * Created by sandeep on 1/13/2017.
 */
module.exports.init = function(provider){
    this.provider = provider
}

module.exports.saveCustomer = function(req,callback){
    this.provider.saveCustomer(req,callback)
}
