(function () {
    'use strict'
    angular.module('app')
        .controller('LoginController', LoginController);
    LoginController.$inject = ['$scope', '$location', '$rootScope', 'AuthenticationService', 'FlashService'];

    function LoginController($scope, $location, $rootScope, AuthenticationService, FlashService) {
        var vm = this;
        $rootScope.message = "Login";
        vm.login = login;
        (function initController() {
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    $rootScope.message = "Chào " + vm.username + ", Logout";
                    console.log($rootScope.quanly)
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/home');
                } else {
                    $scope.quanly = false;
                    $rootScope.message = "Login";
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        }
    }
})();