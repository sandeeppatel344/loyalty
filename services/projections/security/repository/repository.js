/**
 * Created by sandeep on 1/15/2017.
 */
module.exports.init = function(provider){
    this.provider = provider;
    module.exports.saveShopsMaster = function(req,callback){
        this.provider.saveShopsMaster(req,callback)
    }
}
