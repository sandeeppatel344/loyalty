/**
 * Created by sandeep on 1/15/2017.
 */
module.exports.init = function(provider){
    this.provider = provider;
    module.exports.userLogin = function(req,callback){
        this.provider.userLogin(req,callback)
    }
}
