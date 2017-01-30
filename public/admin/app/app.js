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

    .state("app.employeereg",{
        url:'/employeereg',
        cache:false,
        views : {
            '@' : {
                templateUrl : 'admin/app/employeereg/views/employeereg.html'
            }
        }

    })

    .state("app.coupan",{
        url:'/coupan',
        cache:false,
        views : {
            '@' : {
                templateUrl : 'admin/app/coupan/views/coupan.html'
            }
        }

    })

    .state("app.faq",{
        url:'/faq',
        cache:false,
        views : {
            '@' : {
                templateUrl : 'admin/app/faq/views/faq.html'
            }
        }

    })

    .state("app.feedback",{
        url:'/feedback',
        cache:false,
        views : {
            '@' : {
                templateUrl : 'admin/app/feedback/views/feedback.html'
            }
        }

    })

    .state("app.promotion",{
        url:'/promotion',
        cache:false,
        views : {
            '@' : {
                templateUrl : 'admin/app/promotion/views/promotion.html'
            }
        }

    })

    .state("app.shopreg",{
        url:'/shopreg',
        cache:false,
        views : {
            '@' : {
                templateUrl : 'admin/app/shopreg/views/shopreg.html'
            }
        }

    })

     .state("app.tasks",{
        url:'/tasks',
        cache:false,
        views : {
            '@' : {
                templateUrl : 'admin/app/tasks/views/tasks.html'
            }
        }

    })



    $urlRouterProvider.otherwise('app/login')
})
angular.element(document).ready(function ($rootScope) {
    angular.bootstrap(document,["Loyalty"])
})