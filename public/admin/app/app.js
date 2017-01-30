/**
 * Created by sandeep on 1/23/2017.
 */
var app = angular.module("Loyalty",['ui.router']);
app.run(function(){

});
app.config(function($urlRouterProvider, $stateProvider, $locationProvider){

    $stateProvider.state('app', {
        url : '/app',
        abstract :true
    })
    .state("app.login",{
        url:'/login',
        cache:false,
        views : {
            '@' : {
                templateUrl : 'admin/app/login/views/login.html',
                controller:'loginCtrl'
            }
        }

    })
    .state("app.dashboard",{
        url:'/dashboard',
        cache:false,
        views : {
            '@' : {
                templateUrl : 'admin/app/dashboard/views/dashboard.html'
            }
        }

    })

    .state("app.addressbook",{
        url:'/addressbook',
        cache:false,
        views : {
            '@' : {
                templateUrl : 'admin/app/addressbook/views/addressbook.html'
            }
        }

    })

    .state("app.calendar",{
        url:'/calendar',
        cache:false,
        views : {
            '@' : {
                templateUrl : 'admin/app/calendar/views/calendar.html'
            }
        }

    })

    $urlRouterProvider.otherwise('app/login')
})
angular.element(document).ready(function ($rootScope) {
    angular.bootstrap(document,["Loyalty"])
})