/**
 * Created by sandeep on 1/23/2017.
 */
var app = angular.module("Loyalty",['ui.router']);
app.run(function(){

});
app.config(function($urlRouterProvider, $stateProvider){
    $stateProvider.state('app', {
        url : '/app',
        abstract :true
    }).state("app.login",{
        url:'app/login',
        templateUrl:'/admin/app/login/views/login.html'/*,
        controller:'loginCtrl'*/

    })
    $urlRouterProvider.otherwise('/app/login')
})
angular.element(document).ready(function ($rootScope) {
    angular.bootstrap(document,["Loyalty"])
})