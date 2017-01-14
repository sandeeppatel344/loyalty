/**
 * Created by sandeep on 1/13/2017.
 */
module.exports.init = function(app,repo){
    var projectrepo = repo;
    app.get("/save/customer",function(req,res){
        projectrepo.saveCustomer(req,function(error,data){
        if(error){
            console.log(error)
            res.json({data:"Error in save customer"});
        }else{
            res.json(data);
        }
        })
    })
}
