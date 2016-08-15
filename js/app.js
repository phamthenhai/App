(function () {
    'use strict';
    var app = angular.module('app', ['ngRoute',  'ngCookies', 'firebase']);
  app.config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                controller: 'Controller',
                templateUrl: 'template/home.view.html',
                controllerAs: 'ctrl'
            }) 
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'template/login.view.html',
                controllerAs: 'vm'
            }) 
            .when('/danhmuc', {
                controller: 'Controller',
                templateUrl: 'template/danhmuc.view.html',
                controllerAs: 'ctrl'
            })
            .when('/product', {
                controller: 'Controller',
                templateUrl: 'template/sanpham.view.html',
                controllerAs: 'ctrl'
            })
            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'template/register.view.html',
                controllerAs: 'vm'
            });
//            .otherwise({ redirectTo: '/home' });
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint 
        }
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/product','/home', '/danhmuc','/login', '/register']) === -1;
            console.log($location.path());
            console.log(restrictedPage);
            var loggedIn = $rootScope.globals.currentUser;
            console.log(!loggedIn);
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }else{
            }
        });
    }

})();
