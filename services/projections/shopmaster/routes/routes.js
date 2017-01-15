/**
 * Created by sandeep on 1/15/2017.
 */
module.exports.init = function(app,repo){
    var projectrepo = repo;
    app.post("/save/shopsmaster",function(req,res){
        projectrepo.saveShopsMaster(req,function(error,data){
            if(error){
                console.log(error)
                res.json({data:error})
            }else{
                res.json(data);
            }
        })
    })
}
